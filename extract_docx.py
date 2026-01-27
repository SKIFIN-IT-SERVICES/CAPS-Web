import zipfile
import xml.etree.ElementTree as ET
import sys

def extract_text_from_docx(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as zf:
            xml_content = zf.read('word/document.xml')
        
        tree = ET.fromstring(xml_content)
        
        # XML namespace for Word documents
        namespaces = {
            'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
        }
        
        text_content = []
        for paragraph in tree.findall('.//w:p', namespaces):
            texts = [node.text for node in paragraph.findall('.//w:t', namespaces) if node.text]
            if texts:
                text_content.append(''.join(texts))
            else:
                text_content.append('') # Preserve paragraph breaks
                
        return '\n'.join(text_content)
        
    except Exception as e:
        return f"Error reading DOCX: {e}"

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_docx.py <path_to_docx>")
        sys.exit(1)
        
    file_path = sys.argv[1]
    content = extract_text_from_docx(file_path)
    with open('doc_content.txt', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Wrote content to doc_content.txt")
