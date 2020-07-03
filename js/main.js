
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

function addQuestion() {
    let colors = ["skyblue", "AliceBlue", "AntiqueWhite", "Azure", "Beige", "DarkGrey", "DarkKhaki", "DarkSalmon", "DarkSeaGreen", "Gainsboro", "Lavender", "LightCyan", "LightPink", "LightSteelBlue", "Thistle"];
    let select = Math.floor(Math.random() * colors.length);
    q_count++;
    let container = document.getElementById("content");
    let content = '<img class="images"><input onchange="displayimg(this,' + q_count + ')" class="img" type="file" name="image[]"><br><textarea name="q[]" placeholder="Write Question"></textarea><br><br>\
    <input type="radio" value="A" name="checkbox'+ q_count + '[]"> <textarea class="opt" name="option' + q_count + '[]" placeholder="Write Option"></textarea>\
    <input type="radio" value="B" name="checkbox'+ q_count + '[]"> <textarea class="opt" name="option' + q_count + '[]" placeholder="Write Option"></textarea><br>\
    <input type="radio" value="C" name="checkbox'+ q_count + '[]"> <textarea class="opt" name="option' + q_count + '[]" placeholder="Write Option"></textarea>\
    <input type="radio" value="D" name="checkbox'+ q_count + '[]"> <textarea class="opt" name="option' + q_count + '[]" placeholder="Write Option"></textarea>';
    let div = document.createElement("div");
    div.setAttribute("class", "question");
    div.style.background = colors[select];
    div.style.marginBottom = "10px";
    div.innerHTML = content;
    container.appendChild(div);

};

function save() {
    let time = document.getElementById("time").value;
    let sub = document.getElementById("subName").value;
    let exname = document.getElementById("ExamName").value;
    let email = document.getElementById("email").value;
    if (!sub) {
        let item = document.getElementById("subName");
        item.style.background = "lightpink";
        return alert("Enter Subject Name");
    } else {
        let item = document.getElementById("subName");
        item.style.background = "white";
    }
    if (!exname) {
        let item = document.getElementById("ExamName");
        item.style.background = "lightpink";
        return alert("Enter Exam Name");
    } else {
        let item = document.getElementById("ExamName");
        item.style.background = "white";
    }
    if (!time) {
        let item = document.getElementById("time");
        item.style.background = "lightpink";
        return alert("Enter Time Value");
    } else {
        let item = document.getElementById("time");
        item.style.background = "white";
    }
    if (!email) {
        let item = document.getElementById("email");
        item.style.background = "lightpink";
        return alert("Enter Email");
    } else {
        let item = document.getElementById("email");
        item.style.background = "white";
    }
    let q_len = document.querySelectorAll("textarea[name='q[]']");
    for (let i = 0; i < q_len.length; i++) {
        let opt_len = document.querySelectorAll(`textarea[name="option${i + 1}[]"]`).length;
        let chk = document.querySelector(`input[name="checkbox${i + 1}[]"]:checked`);
        if (chk) {
            for (let j = 0; j < opt_len; j++) {
                let op = document.querySelectorAll(`textarea[name="option${i + 1}[]"]`)[j];
                let allchk = document.querySelectorAll(`input[name="checkbox${i + 1}[]"]`)[j];
                op.innerHTML = op.value;
                allchk.setAttribute("ans", chk);
            }
            q_len[i].innerHTML = q_len[i].value;
            q_len[i].style.background = "white";
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
};

function remove() {
    let con = document.getElementById("content");
    con.removeChild(con.lastChild);
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
    let picfile=document.querySelectorAll("input[type=file]");\
    for(let i=0;i<picfile.length;i++){\
        picfile[i].style.display="none";\
    }\
    let q_len = document.querySelectorAll("textarea[name=\'q[]\']");\
    for (let i = 0; i < q_len.length; i++){\
    let opt_len=document.querySelectorAll(`textarea[name="option${i+1}[]"]`);\
    for(let j=0;j<opt_len.length;j++){\
        opt_len[j].setAttribute("readonly", true);\
    }\
    q_len[i].setAttribute("readonly", true);\
};\
    var inter;\
    window.onload = function() {\
    let time = document.getElementById("time").value;\
    console.log(time);\
    let tm=time.split(":");\
    var min=Number(tm[0]);\
    var sec=Number(tm[1]);\
    inter=setInterval(function () {\
    if (sec ===0) {\
            if(min===0){\
                clearInterval(inter);\
                return submit();\
            }else{\
                min--;\
                sec = 60;\
            }\
        }\
        sec--;\
        let time=document.getElementById("timer");\
        time.innerHTML="Exam Ends In: "+min + " : " + sec;\
        console.log(typeof(sec));\
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
    let mail = document.getElementById("mail").value;\
let q_len = document.querySelectorAll("textarea[name=\'q[]\']"); \
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
    let filename=name+" "+roll;\
    let cont=document.getElementById("cont").innerHTML;\
    let div="<div id=\'content\'>"+cont+"</div>";\
    let style = "<style> img{ height: 100px; width: 200px;}.question{ margin - bottom: 10px; } input[type = file]{ display: none; } @media only screen and(max - width: 667px){ textarea{ display: block }.opt{ margin - bottom: 5px }.question{ padding - bottom: 5px } img{ width: 100 %} }</style >";\
    let text=style+div;\
    download(filename + ".html", text); \
    sendMail(mail,name,roll);\
}\
    function sendMail(mail,name,roll) {\
    var link = "mailto:"+mail\
        + "?cc=riyad303030@gmail.com"\
        + "&subject=" + escape(name+" Submitted Ansersheet")\
        + "&body=" + escape("My Roll Is"+roll)\
        ;\
    window.location.href = link;\
};\
    let btn=document.createElement("button");\
    btn.innerHTML = "Submit";\
    btn.onclick = function () { submit() };\
    document.body.appendChild(btn);\
    let timer=document.createElement("h1");\
    timer.style.position="absolute";\
    timer.setAttribute("id","timer");\
    timer.style.top = "0";\
    timer.style.right="0";\
    timer.innerHTML="Exam Ends In: ";\
    document.body.appendChild(timer);\
</script >';
    let input = '<label for="name">Enter Your Name</label> <input type="text" id="name"><br>\
    <label for="roll">Enter Your Roll</label> <input type="text" id="roll"><br>';
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
    let cons = con.innerHTML;
    let subname = document.getElementById("subName").value;
    let examName = document.getElementById("ExamName").value;
    let div = '<div id="cont"><center><h1>' + examName + '<br>' + subname + '</h1></center>' + cons + '</div>';
    let style = '<style>img{height: 100px;width:200px;}.question{margin-bottom:10px;}input[type=file]{display:none;}@media only screen and (max-width:667px){textarea{display:block}.opt{margin-bottom:5px}.question{padding-bottom:5px}img{width:100%}}</style>';
    let text = style + div + input + script;
    let filename = subname + " " + examName;
    download(filename + ".html", text);
};

let file = document.querySelectorAll("input[type=file]")[0];
file.addEventListener("change", function (event) {
    let iframe1 = document.getElementById("secWin");
    let filename = `answersheet/${this.files.item(0).name}`;
    iframe1.setAttribute("src", filename);
});
function marks() {
    let c = 0, d = 0;
    let iframe = document.getElementById('secWin');
    let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    let q_len = innerDoc.querySelectorAll('textarea[name="q[]"]');
    for (let i = 0; i < q_len.length; i++) {
        let op_len = innerDoc.querySelectorAll(`textarea[name="option${i + 1}[]"]`);
        let radio_len = innerDoc.querySelectorAll(`input[name="checkbox${i + 1}[]"]`);
        for (let j = 0; j < op_len.length; j++) {
            console.log(radio_len[j]);
            if (radio_len[j].checked) {
                if (radio_len[j].value === radio_len[j].getAttribute("ans")) {
                    op_len[j].style.background = "green";
                } else {
                    op_len[j].style.background = "red";
                    c++;
                }
            }
            if (radio_len[j].disabled) {
                d++;
                if (radio_len[j].value === radio_len[j].getAttribute("ans")) {
                    op_len[j].style.background = "green";
                }
            }
        }
        if (d === 4) {
            c++;
            d = 0;
        }
    }
    let mark = q_len.length - c;
    let h1 = document.createElement("h1");
    h1.innerHTML = 'Obtained Marks: <font style= "color:red;">' + mark + '</font>';
    document.body.appendChild(h1);
};


