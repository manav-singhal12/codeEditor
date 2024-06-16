function run(){
    let htmlcode=document.getElementById("html")
let csscode=document.getElementById("css")
let jscode=document.getElementById("js")
let output=document.getElementById("output")

output.contentDocument.body.innerHTML=htmlcode.value+"<style>"+csscode.value
+"</style>"
+"<script>"+jscode.value+"</script>"
}

