function getMarkdown(){
    // hide
    document.getElementById("making-readme").style.display = "none";

    let sections = ["Project name", "Project description", "Badges", "Visuals", "Installation", "Usage", "Support", "Roadmap", "Contributing", "Authors and acknowledgment", "License", "Project status"]
    let markdown = '', content;
    for (let sec of sections){
        content = document.getElementById(sec).value;
        if (sec == "Project name"){
            markdown += "# " + content + "\n";
            continue;
        }
        else if (sec == "Project description"){
            markdown += content + "\n";
            continue;
        }
        else if (sec == "Visuals"){
            markdown += "\n## Visuals\n\n"
            continue;
        }
        if (content != ''){
            if (sec == "License"){
                if (content == "Unlicensed"){
                    continue;
                }
            }
            markdown += "\n## " + sec + "\n";
            markdown += content + "\n";
        }
    }
    document.getElementById("reading-readme").style.display = "block";
    document.getElementById("readme").value = markdown;
    document.getElementById("readme").readOnly = true;
}
