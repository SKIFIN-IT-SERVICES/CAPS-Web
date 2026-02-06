$images = @(
    @{ Url = "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2000"; File = "data-server.jpg" },
    @{ Url = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"; File = "consulting.jpg" },
    @{ Url = "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80&w=2000"; File = "it-support.jpg" },
    @{ Url = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000"; File = "medical-checklist.jpg" },
    @{ Url = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"; File = "dashboard.jpg" },
    @{ Url = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2000"; File = "code-screen.jpg" },
    @{ Url = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070"; File = "services-hero.jpg" },
    @{ Url = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2072"; File = "contact-hero.jpg" },
    @{ Url = "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2076"; File = "footer-bg.jpg" }
)

$destDir = "public/images/assets"
New-Item -ItemType Directory -Force -Path $destDir | Out-Null

foreach ($img in $images) {
    $outputPath = Join-Path $destDir $img.File
    Write-Host "Downloading $($img.Url) to $outputPath..."
    Invoke-WebRequest -Uri $img.Url -OutFile $outputPath
}
Write-Host "All images downloaded."
