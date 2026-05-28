# fix-malformed-img-links.ps1
# Strips dangling ](wp-content URL) suffixes left on <div>...</div> image blocks
# where the opening [ bracket was already absent.

$repoRoot  = "C:\Users\sebas\OneDrive\Dokument\Claude\Projects\support-doc"
$pattern   = New-Object System.Text.RegularExpressions.Regex(
    '</div>\]\(https://support\.emarketeer\.com/wp-content/uploads/[^)]+\)',
    [System.Text.RegularExpressions.RegexOptions]::Singleline
)
$utf8NoBOM = New-Object System.Text.UTF8Encoding $false
$count     = 0

Get-ChildItem $repoRoot -Recurse -Filter *.md | ForEach-Object {
    $rel     = $_.FullName.Substring($repoRoot.Length + 1) -replace '\\', '/'
    $content = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
    if ($pattern.IsMatch($content)) {
        $new = $pattern.Replace($content, '</div>')
        [System.IO.File]::WriteAllText($_.FullName, $new, $utf8NoBOM)
        $count++
        Write-Host "Fixed: $rel"
    }
}
Write-Host "Files fixed: $count"
