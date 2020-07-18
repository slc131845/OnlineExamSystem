var q_count = 0;
function displayimg(e, i) {
    if (e.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            let img = document.querySelectorAll('.images')[i - 1];
            img.style.display = "block";
            img.setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(e.files[0]);
    }
};

function displayimg1(e, i, j) {
    if (e.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            let img = document.querySelectorAll(`div[name="option${i}[]"]`)[j];
            img.style.display = "inline-block";
            img.style.backgroundImage = `url('${(e.target.result).replace(/(\r\n|\n|\r)/gm, "")}')`;
            img.style.backgroundSize = "content";
            img.style.backgroundRepeat = "no-repeat";
            img.style.backgroundPosition = "center";
            //img.setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(e.files[0]);
    }
};

function addQuestion() {
    let colors = ["skyblue", "AliceBlue", "AntiqueWhite", "Azure", "Beige", "DarkGrey", "DarkKhaki", "DarkSalmon", "DarkSeaGreen", "Gainsboro", "Lavender", "LightCyan", "LightPink", "LightSteelBlue", "Thistle"];
    let select1 = Math.floor(Math.random() * colors.length);
    let select2 = Math.floor(Math.random() * colors.length);
    let select3 = Math.floor(Math.random() * colors.length);
    let select4 = Math.floor(Math.random() * colors.length);
    q_count++;
    let container = document.getElementById("content");
    let content = '<h1 style="display:block;">' + q_count + '</h1><img class="images"><input onchange="displayimg(this,' + q_count + ')" class="img" type="file" name="image[]"><br><div contentEditable="true" style="resize:both; border:1px solid black; overflow:auto; display:inline-block; height:80px; width:99%; padding:3px;" name="q[]">Write Question</div><br><br>\
    <input type="radio" value="A" name="checkbox'+ q_count + '[]"> <div contentEditable="true" style="resize:both; border:1px solid black; overflow:auto; display:inline-block; height:50px; width:150px; padding:3px;" class="opt" name="option' + q_count + '[]">Write Option</div><input onchange="displayimg1(this,' + q_count + ',0)" class="img" type="file" name="image[]">\
    <input type="radio" value="B" name="checkbox'+ q_count + '[]"> <div contentEditable="true" style="resize:both; border:1px solid black; overflow:auto; display:inline-block; height:50px; width:150px; padding:3px;" class="opt" name="option' + q_count + '[]">Write Option</div><input onchange="displayimg1(this,' + q_count + ',1)" class="img" type="file" name="image[]"><br>\
    <input type="radio" value="C" name="checkbox'+ q_count + '[]"> <div contentEditable="true" style="resize:both; border:1px solid black; overflow:auto; display:inline-block; height:50px; width:150px; padding:3px;" class="opt" name="option' + q_count + '[]">Write Option</div><input onchange="displayimg1(this,' + q_count + ',2)" class="img" type="file" name="image[]">\
    <input type="radio" value="D" name="checkbox'+ q_count + '[]"> <div contentEditable="true" style="resize:both; border:1px solid black; overflow:auto; display:inline-block; height:50px; width:150px; padding:3px;" class="opt" name="option' + q_count + '[]">Write Option</div><input onchange="displayimg1(this,' + q_count + ',3)" class="img" type="file" name="image[]">';
    let div = document.createElement("div");
    div.setAttribute("class", "question");
    div.style.backgroundImage = `linear-gradient(to bottom,${colors[select1]},${colors[select2]},${colors[select3]},${colors[select4]})`;
    div.style.backgroundAttachment = "fixed";
    div.style.marginBottom = "10px";
    div.innerHTML = content;
    container.appendChild(div);

};

function save() {
    let time = document.getElementById("time").value;
    let sub = document.getElementById("subName").value;
    let exname = document.getElementById("ExamName").value;
    let email = document.getElementById("email").value;
    let examNum = document.getElementById("ExamNum").value;
    let teaName = document.getElementById("Teaname").value;
    let className = document.getElementById("className").value;
    if (!className) {
        let item = document.getElementById("className");
        item.style.background = "lightpink";
        return alert("Enter Class Name");
    } else {
        let item = document.getElementById("className");
        item.setAttribute("value", item.value);
        item.style.background = "white";
    }
    if (!teaName) {
        let item = document.getElementById("Teaname");
        item.style.background = "lightpink";
        return alert("Enter Teacher Name");
    } else {
        let item = document.getElementById("Teaname");
        item.setAttribute("value", item.value);
        item.style.background = "white";
    }
    if (!examNum) {
        let item = document.getElementById("ExamNum");
        item.style.background = "lightpink";
        return alert("Enter Exam Number");
    } else {
        let item = document.getElementById("ExamNum");
        item.setAttribute("value", item.value);
        item.style.background = "white";
    }
    if (!sub) {
        let item = document.getElementById("subName");
        item.style.background = "lightpink";
        return alert("Enter Subject Name");
    } else {
        let item = document.getElementById("subName");
        item.setAttribute("value", item.value);
        item.style.background = "white";
    }
    if (!exname) {
        let item = document.getElementById("ExamName");
        item.style.background = "lightpink";
        return alert("Enter Exam Name");
    } else {
        let item = document.getElementById("ExamName");
        item.setAttribute("value", item.value);
        item.style.background = "white";
    }
    if (!time) {
        let item = document.getElementById("time");
        item.style.background = "lightpink";
        return alert("Enter Time Value");
    } else {
        let item = document.getElementById("time");
        item.setAttribute("value", item.value);
        item.style.background = "white";
    }
    if (!email) {
        let item = document.getElementById("email");
        item.style.background = "lightpink";
        return alert("Enter Email");
    } else {
        let item = document.getElementById("email");
        item.setAttribute("value", item.value);
        item.style.background = "white";
    }
    let q_len = document.querySelectorAll("div[name='q[]']");
    for (let i = 0; i < q_len.length; i++) {
        let opt_len = document.querySelectorAll(`div[name="option${i + 1}[]"]`).length;
        let chk = document.querySelector(`input[name="checkbox${i + 1}[]"]:checked`);
        if (chk) {
            for (let j = 0; j < opt_len; j++) {
                let op = document.querySelectorAll(`div[name="option${i + 1}[]"]`)[j];
                let allchk = document.querySelectorAll(`input[name="checkbox${i + 1}[]"]`)[j];
                //op.innerHTML = op.innerHTML;
                op.innerHTML = op.innerHTML.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
                console.log(op.innerHTML);
                allchk.setAttribute("nextRandomProgress", chk.value.charCodeAt(0));
            }
            q_len[i].innerHTML = q_len[i].innerHTML.replace(/&lt;/g, "<").replace(/&gt;/g, ">");;
            q_len[i].style.background = "transparent";
        } else {
            q_len[i].style.background = "darkseagreen";
            return alert(`Please Give ${i + 1} No Question Answer`);
        }

    }
    alert("Questions Saved successfully ");
    let mail = document.getElementById("email");
    let timer = document.getElementById("time");
    mail.setAttribute("value", mail.value);
    timer.setAttribute("value", timer.value);
    let htmlcontent = document.getElementById("saveContent").innerHTML;
    if (typeof (Storage) !== "undefined") {
        console.log(JSON.stringify(htmlcontent));
        localStorage.setItem("saveProgress", htmlcontent);
        localStorage.setItem("count", q_count);
    } else {
        alert("Saving Not Possible");
    }
};
function loadPrev() {
    if (localStorage.getItem("count") === null && localStorage.getItem("saveContent") === null) {
        alert("Nothing to Load");

    } else {
        if (typeof (Storage) !== "undefined") {
            document.getElementById("saveContent").innerHTML = localStorage.getItem("saveProgress");
            q_count = localStorage.getItem("count");
        }
    }

}

function remove() {
    q_count--;
    if (q_count <= 0) {
        q_count = 0;
    }
    let con = document.getElementById("content");
    if (con.hasChildNodes()) {
        con.removeChild(con.lastChild);
    } else {
        return alert("No Element To Delete");
    }

};

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};

function print() {
    let script = '<script>\
    alert("Please Fill Up Name And Roll First");\
    let imges=document.getElementsByClassName("images");\
    for (let i = 0; i < imges.length; i++){\
        if (imges[i].getAttribute("src")) {\
        imges[i].setAttribute("title","Click To Maximise");\
        imges[i].style.cursor = "pointer";\
            imges[i].addEventListener("click", function () {\
                if (this.style.height === "50%" && this.style.width === "100%") {\
                    this.style.transition="all .5s linear";\
                    this.setAttribute("title","Click To Maximise");\
                    this.style.height = "100px"; \
                    this.style.width = "200px"; \
                } else {\
                    this.style.transition="all .5s linear";\
                    this.setAttribute("title","Click To Minimise");\
                    this.style.height = "50%"; \
                    this.style.width = "100%"; \
                } \
            });\
        }\
    }\
    let picfile=document.querySelectorAll("input[type=file]");\
    for(let i=0;i<picfile.length;i++){\
        picfile[i].style.display="none";\
    }\
    let q_len = document.querySelectorAll("div[name=\'q[]\']");\
    for (let i = 0; i < q_len.length; i++){\
    let opt_len=document.querySelectorAll(`div[name="option${i+1}[]"]`);\
    for(let j=0;j<opt_len.length;j++){\
        opt_len[j].setAttribute("contentEditable", false);\
        opt_len[j].style.resize="none";\
    }\
    q_len[i].setAttribute("contentEditable", false);\
    q_len[i].style.resize="none";\
};\
    var inter;\
    window.onload = function() {\
    let time = document.getElementById("time").value;\
    let tm=time.split(":");\
    var min=Number(tm[0]);\
    var sec=Number(tm[1]);\
    inter=setInterval(function () {\
    if (sec ===0) {\
            if(min===0){\
                clearInterval(inter);\
                alert("Your Exam Time Has Been Finished");\
                return submit();\
            }else{\
                min--;\
                sec = 60;\
            }\
        }\
        sec--;\
        let time=document.getElementById("timer");\
        time.innerHTML="Exam Ends In: "+min + " : " + sec;\
    }, 1000);\
};\
    function download(filename, text) {\
    var element = document.createElement(\'a\');\
    element.setAttribute(\'href\', \'data:text/plain;charset=utf-8,\' + encodeURIComponent(text));\
    element.setAttribute(\'download\', filename);\
    element.style.display = \'none\';\
    document.body.appendChild(element);\
    element.click();\
    document.body.removeChild(element);\
};\
function submit() {\
    clearInterval(inter);\
    let name=document.getElementById("name").value;\
    let roll=document.getElementById("roll").value;\
    let cls=document.getElementById("cls").value;\
    let grp=document.getElementById("grp").value;\
    let sec=document.getElementById("sec").value;\
    let mail = document.getElementById("mail").value;\
let q_len = document.querySelectorAll("div[name=\'q[]\']"); \
for (let i = 0; i < q_len.length; i++) {\
    let opt_len = document.querySelectorAll(`input[name="checkbox${i + 1}[]"]`); \
    for (let j = 0; j < opt_len.length; j++) {\
        if (opt_len[j].checked===true){\
            opt_len[j].setAttribute("checked","checked");\
        }\
        if (!opt_len[j].checked) {\
            opt_len[j].disabled = true; \
        }\
    }\
}\
    let filename=name+" "+roll+" "+cls+" "+grp+" "+sec;\
    let cont=document.getElementById("cont").innerHTML;\
    let div="<div id=\'content\'>"+cont+"</div>";\
    let style = "<style>img{ height: 100px; width: 200px;}.question{ margin-bottom: 10px; width: 99% !important;} input[type = file]{ display: none; } @media only screen and (max-width: 667px){#timer{ top: 180px !important; font-size: 1rem; }#exnumHead{ top: 150px !important; font-size: 1rem; } h1{ display: block; } div{ display: block !important; } .opt{ margin-bottom: 5px } .question{ padding-bottom: 5px }}</style>";\
    let text=style+div;\
    let context=confirm("Do You Want To Download");\
    if(context===true){\
        download(filename + ".html", text); \
        alert("Download completed");\
    }else{\
        alert("File Not Downloaded");\
    }\
    let sendm=document.createElement("button");\
    sendm.innerHTML="Send Email";\
    sendm.style.fontSize="1.5rem";\
    sendm.onclick=function(){sendMail(mail,name,roll,cls,sec,grp,filename)};\
    document.body.appendChild(sendm);\
};\
function sendMail(mail, name, roll, cls, sec, grp,filename) {\
    alert("Please Attach The File Named "+filename+".html");\
    var link = "mailto:" + mail\
    + "?cc=ictpracticalslc@gmail.com"\
    + "&subject=" + escape("Submitted Answersheet By " + name + " Class " + cls + " Section " + sec + " Group " + grp) \
    + "&body=" + escape("My Roll Is " + roll) \
    ; \
    window.location.href = link; \
}; \
let btn = document.createElement("button"); \
btn.innerHTML = "Download"; \
btn.style.fontSize="1.5rem";\
btn.onclick = function () { submit() }; \
document.body.appendChild(btn); \
let timer = document.createElement("h1"); \
timer.style.position = "fixed"; \
timer.setAttribute("id", "timer"); \
timer.style.top = "30px"; \
timer.style.right = "0"; \
timer.innerHTML = "Exam Ends In: "; \
let h1 = document.createElement("h1"); \
h1.innerHTML = "Exam Number: " + document.getElementById("exnum").value; \
h1.style.position = "absolute"; \
h1.setAttribute("id", "exnumHead"); \
h1.style.left = "0"; \
h1.style.top = "30px"; \
document.body.appendChild(h1); \
document.body.appendChild(timer); \
</script > ';
    let input = '<label for="name">Enter Your Name</label> <input type="text" id="name"><br><br>\
    <label for="roll">Enter Your Roll</label> <input type="text" id="roll"><br><br>\
    <label for="cls">Enter Your Class Name</label> <input type="text" id="cls"><br><br>\
    <label for="sec">Enter Your Section Name</label> <input type="text" id="sec"><br><br>\
    <label for="grp">Enter Your Group Name</label> <input type="text" id="grp" placeholder="science/humanities/bussiness"><br><br>';
    let con = document.getElementById("content");
    let mail = document.getElementById("email").value;
    let int = document.createElement("input");
    int.id = "mail";
    int.type = "email";
    int.setAttribute("value", mail);
    int.style.display = "none";
    con.appendChild(int);
    let timeIn = document.getElementById("time").value;
    let doctimeinp = document.createElement("input");
    doctimeinp.type = "text";
    doctimeinp.setAttribute("id", "time");
    doctimeinp.setAttribute("value", timeIn);
    doctimeinp.style.display = "none";
    con.appendChild(doctimeinp);
    let exnum = document.getElementById("ExamNum").value;
    let exnuminp = document.createElement("input");
    exnuminp.setAttribute("id", "exnum");
    exnuminp.type = "text";
    exnuminp.setAttribute("value", exnum);
    exnuminp.style.display = "none";
    con.appendChild(exnuminp);
    let cons = con.innerHTML;
    let subname = document.getElementById("subName").value;
    let examName = document.getElementById("ExamName").value;
    let className = document.getElementById("className").value;
    let div = '<center><div><br><br><br><br><br><br><br><br><br><br><br>' + input + '</div></center><div id="cont"><center><h1 style="margin-bottom:50px;">Savar Laboratory College Online Exam System<br><br><br>' + examName + '<br>' + subname + '</h1></center>' + cons + '</div>';
    let style = '<style>img{height: 100px;width:200px;} .question{margin-bottom:10px; width:99% !important;} input[type=file]{display:none;}@media only screen and (max-width:667px){#timer{top:180px !important;font-size:1rem;}#exnumHead{top:150px !important;font-size:1rem;}h1{display:block}div{display:block !important;} .opt{margin-bottom:5px;} .question{padding-bottom:5px;}}</style>';
    let text = style + div + script;
    let teachername = document.getElementById("Teaname").value;
    let filename = teachername + " " + className + " " + subname + " " + examName;
    download(filename + ".html", text);
    let subHead = document.createElement("h1");
    subHead.setAttribute("id", "subhead");
    subHead.innerHTML = "Upload File To :";
    let combtn = document.createElement("button");
    combtn.setAttribute("id", "combtn");
    combtn.style.marginRight = "5px";
    combtn.setAttribute("onclick", "window.open('https://github.com/slc131845/OnlineCommonQusetionBank/tree/master/Questions','_blank')");
    combtn.innerHTML = "HSC Common";
    let scibtn = document.createElement("button");
    scibtn.setAttribute("id", "scibtn");
    scibtn.style.marginRight = "5px";
    scibtn.setAttribute("onclick", "window.open('https://github.com/slc131845/OnlineQuestionBankScience/tree/master/Questions','_blank')");
    scibtn.innerHTML = "HSC Science";
    let bsbtn = document.createElement("button");
    bsbtn.setAttribute("id", "bsbtn");
    bsbtn.style.marginRight = "5px";
    bsbtn.setAttribute("onclick", "window.open('https://github.com/slc131845/OnlineQuestionBankBS/tree/master/Questions','_blank')");
    bsbtn.innerHTML = "HSC Bussiness";
    let hubtn = document.createElement("button");
    hubtn.setAttribute("id", "hubtn");
    hubtn.style.marginRight = "5px";
    hubtn.setAttribute("onclick", "window.open('https://github.com/slc131845/OnlineQuestionBankHumanities/tree/master/Questions','_blank')");
    hubtn.innerHTML = "HSC Humanities";
    let ninecombtn = document.createElement("button");
    ninecombtn.setAttribute("id", "ninecombtn");
    ninecombtn.style.marginRight = "5px";
    ninecombtn.setAttribute("onclick", "window.open('https://github.com/slc131845/nineCommon/tree/master/Questions','_blank')");
    ninecombtn.innerHTML = "Nine Common";
    let ninescibtn = document.createElement("button");
    ninescibtn.setAttribute("id", "ninescibtn");
    ninescibtn.style.marginRight = "5px";
    ninescibtn.setAttribute("onclick", "window.open('https://github.com/slc131845/nineScience/tree/master/Questions','_blank')");
    ninescibtn.innerHTML = "Nine Science";
    let ninebsbtn = document.createElement("button");
    ninebsbtn.setAttribute("id", "ninebsbtn");
    ninebsbtn.style.marginRight = "5px";
    ninebsbtn.setAttribute("onclick", "window.open('https://github.com/slc131845/nineBS/tree/master/Questions','_blank')");
    ninebsbtn.innerHTML = "Nine Bussiness";
    let tencombtn = document.createElement("button");
    tencombtn.setAttribute("id", "tencombtn");
    tencombtn.style.marginRight = "5px";
    tencombtn.setAttribute("onclick", "window.open('https://github.com/slc131845/tenCommon/tree/master/Questions','_blank')");
    tencombtn.innerHTML = "Ten Common";
    let tenscibtn = document.createElement("button");
    tenscibtn.setAttribute("id", "tenscibtn");
    tenscibtn.style.marginRight = "5px";
    tenscibtn.setAttribute("onclick", "window.open('https://github.com/slc131845/tenScience/tree/master/Questions','_blank')");
    tenscibtn.innerHTML = "Ten Science";
    let tenbsbtn = document.createElement("button");
    tenbsbtn.setAttribute("id", "tenbsbtn");
    tenbsbtn.setAttribute("onclick", "window.open('https://github.com/slc131845/tenBS/tree/master/Questions','_blank')");
    tenbsbtn.innerHTML = "Ten Bussiness";
    let br1 = document.createElement("br");
    let br2 = document.createElement("br");
    document.body.appendChild(subHead);
    document.body.appendChild(combtn);
    document.body.appendChild(scibtn);
    document.body.appendChild(bsbtn);
    document.body.appendChild(hubtn);
    document.body.appendChild(ninecombtn);
    document.body.appendChild(br1);
    document.body.appendChild(br2);
    document.body.appendChild(ninescibtn);
    document.body.appendChild(ninebsbtn);
    document.body.appendChild(tencombtn);
    document.body.appendChild(tenscibtn);
    document.body.appendChild(tenbsbtn);
    if (typeof (Storage) !== "undefined") {
        localStorage.removeItem("count");
        localStorage.removeItem("saveProgress");
    }
};


let file = document.querySelectorAll("input[type=file]")[0];
file.addEventListener("change", function (event) {
    for (let i = 0; i < file.files.length; i++) {
        let frame = document.createElement("iframe");
        frame.setAttribute("class", "secwin");
        frame.style.height = "100vh";
        frame.style.width = "100%";
        let filename = `answersheet/${this.files.item(i).name}`;
        frame.setAttribute("src", filename);
        document.getElementById("frames").appendChild(frame);
    }

});

function marks() {
    let c = 0, d = 0;
    let iframe = document.getElementsByClassName('secwin');
    for (let k = 0; k < iframe.length; k++) {
        let innerDoc = iframe[k].contentDocument || iframe[k].contentWindow.document;
        let q_len = innerDoc.querySelectorAll('div[name="q[]"]');
        for (let i = 0; i < q_len.length; i++) {
            let op_len = innerDoc.querySelectorAll(`div[name="option${i + 1}[]"]`);
            let radio_len = innerDoc.querySelectorAll(`input[name="checkbox${i + 1}[]"]`);
            for (let j = 0; j < op_len.length; j++) {
                if (!radio_len[j].disabled) {
                    if (radio_len[j].value === String.fromCharCode(radio_len[j].getAttribute("nextRandomProgress"))) {
                        op_len[j].style.background = "green";
                    } else {
                        op_len[j].style.background = "red";
                        c++;
                    }
                }
                if (radio_len[j].disabled) {
                    d++;
                    if (radio_len[j].value === String.fromCharCode(radio_len[j].getAttribute("nextRandomProgress"))) {
                        op_len[j].style.background = "green";
                    }
                }
            }
            if (d === 4) {
                c++;
                d = 0;
            }
            d = 0;
        }
        let mark = q_len.length - c;
        let h1 = document.createElement("h1");
        let stName = iframe[k].getAttribute("src");
        stName = stName.replace("answersheet/", "").replace(".html", "");
        h1.innerHTML = stName + ' Obtained Marks: <font style= "color:red;">' + mark + '</font>';
        document.getElementById("result").appendChild(h1);
        c = 0;
        d = 0;
    }
};

function downloadResult() {
    let cont = document.getElementById("result").innerHTML;
    let section = prompt("Please Enter Section Name:", "XI SCI A");
    let filename = section ? section : "XI SCI A";
    download(filename + " Result.html", cont);
};


