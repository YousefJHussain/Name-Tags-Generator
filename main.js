let counter = 0;
let delElement = 0;
let index = 0
function generateName () {
    
    let colors = ["#4e8358", "#ff0a00","#0f0087","#431e2e" ,"#814ca7" ,"#23652f","#e1679c", "#250041" ,"#990600","#070043","#113217", "#4c0300","#ea94b9" ,"#4b0082", "#ff3a32","#3e329f"];
    if ( counter === colors.length) {
        counter = 0;
    }
    let name = document.getElementById("getName").value;
    if(name !== "") {
        if (name.length < 3) {
            alert("The Name is Short. Please Write Right Name.");
        } else if (name.length > 10){
            alert("The Name is Long, Please Write First Name Just.")
        } else {
            document.getElementById("getName").value = "";
        let parent_generate = document.getElementById("generate");

        let box_generate = document.createElement("div");
        box_generate.setAttribute('id',`box-generate-${delElement}`);
        // start style to box generate 
        box_generate.style.backgroundColor = colors[counter]; // can I use `#${parseInt(Math.random() * 1000000)}`
        box_generate.style.width = "150px";
        box_generate.style.height = "110px";
        box_generate.style.paddingTop = "10px";
        box_generate.style.paddingBottom = "20px";
        box_generate.style.borderRadius = "10px";
        box_generate.style.position = "relative";
        // end style to box generate
        let button_del = document.createElement("button");
        button_del.setAttribute("onclick","remove(this)");
        // start style button delete element
        button_del.style.width = "15px";
        button_del.style.height = "15px";
        button_del.style.position = "absolute";
        button_del.style.top = "7px";
        button_del.style.right = "7px";
        button_del.style.padding = "0";
        button_del.style.border = "unset";
        button_del.style.outline = "unset";
        button_del.style.backgroundColor = "transparent";
        button_del.style.cursor = "pointer";
        // end style button delete element
        let icon_del = document.createElement("img");
        icon_del.setAttribute("src", "delete.png");
        // start style icon delete 
        icon_del.style.width = "100%";
        icon_del.style.height = "100%";
        // end style icon delete 
        let title_generate = document.createElement("h2");
        title_generate.innerText = "Hello";
        // start style title box generate
        title_generate.style.margin = "0";
        title_generate.style.textAlign = "center";
        title_generate.style.color = "#FFF";
        // end style title box generate
        let sub_title_generate = document.createElement("p");
        sub_title_generate.innerText = "my name is";
        // start style sub title generate
        sub_title_generate.style.margin = "0";
        sub_title_generate.style.marginBottom = "10px";
        sub_title_generate.style.textAlign = "center";
        sub_title_generate.style.color = "#FFF";
        // end style sub title generate
        let setName = document.createElement("span"); 
        setName.innerText = name;
        // start style setName
        setName.style.display = "block";
        setName.style.backgroundColor = "#FFF";
        setName.style.padding = "10px";
        setName.style.textAlign = "center";
        setName.style.fontSize = "23px";
        setName.style.fontWeight = "800";
        setName.style.color = "red";
        // end style setName


        parent_generate.appendChild(box_generate);
        box_generate.appendChild(button_del);
        button_del.appendChild(icon_del);
        box_generate.appendChild(title_generate);
        box_generate.appendChild(sub_title_generate);
        box_generate.appendChild(setName);


        counter++;
        delElement++;
        }
    } else {
        alert("The Field is Empty. Please Write Name.");
    }
    
}


function remove(el) {
    el.parentNode.parentNode.removeChild(el.parentNode);
}


function removeAll() {
    for (index; index < delElement; index++) {
        var element = document.getElementById(`box-generate-${index}`);
        element.remove();
    }
    index = delElement;
}

