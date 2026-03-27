$files = Get-ChildItem -Path src/js -Recurse -Filter *.vue
foreach ($f in $files) {
    if ($f.Name -eq 'App.vue') { continue }
    $text = [IO.File]::ReadAllText($f.FullName)
    $text = $text -creplace '<ClientOnly>\s*(<SplideSlide)', '$1'
    $text = $text -creplace '(</SplideSlide>)\s*</ClientOnly>', '$1'
    $text = $text -creplace '<ClientOnly>\s*(<Splide([ >]))', '$1'
    $text = $text -creplace '(</Splide>)\s*</ClientOnly>', '$1'
    
    $text = $text -creplace '(<Splide([ >]))', '<ClientOnly>$1'
    $text = $text -creplace '(</Splide>)', '$1</ClientOnly>'
    
    $text = $text -creplace 'import\s*\{\s*Splide[^}]*\}\s*from\s*["'']@splidejs/vue-splide["''];?', ''
    
    $text = [System.Text.RegularExpressions.Regex]::Replace($text, 'components:\s*\{([^}]*)\}', {
        param($m)
        $inner = $m.Groups[1].Value -creplace '\bSplide(?:Slide|Track)?\b\s*,?\s*', ''
        return "components: {$inner}"
    })
    
    $text = $text -creplace '(<loading\s[^>]*/>)', '<ClientOnly>$1</ClientOnly>'
    
    [IO.File]::WriteAllText($f.FullName, $text)
}
