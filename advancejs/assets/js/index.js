class vision {
    constructor(projectName, companyName, stdName) {
        // alert("this is constructor method")
        this.projectName = projectName;
        this.cName = companyName;
        this.sName = stdName;
    }
    displayProject(skills) {
        alert(this.sName + " is displaying " + this.projectName + " project in vision 2024 this project is based on " + skills);
    }
    jobFair() {
        alert(this.cName + " hired " + this.sName + " after checking his project " + this.projectName)

    }
}
let z = new vision("star Classes", "softTech", "Moiz");
z.displayProject("web designing");
let std = new vision("web development", "brainTechie", "ali");
std.jobFair();
std.displayProject("php");