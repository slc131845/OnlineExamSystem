<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv=“Pragma” content=”no-cache”>
    <meta http-equiv=“Expires” content=”-1″>
    <meta http-equiv=“CACHE-CONTROL” content=”NO-CACHE”>
    <title>Savar Laboratory College Online Exam System</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="icon" type="image/png" href="https://i.ibb.co/DfK9TrZ/favicon.png" />
</head>

<body id="saveContent">
    <div id="banner">
        <center>
            <img src="image/pro.png">
            <h1>Savar Laboratory College Online Exam System</h1>
        </center>
    </div>
    <div id="formPart">
        <label for="Teaname">Enter Teacher Name</label>
        <input type="text" id="Teaname" name="teaName" value="" placeholder="Enter Teacher Name" autocomplete="on">
        <label for="subName">Enter Subject Name</label>
        <input type="text" id="subName" name="subjectName" value="" placeholder="Enter Subject Name" autocomplete="on">
        <label for="ExamName">Enter Exam Name</label>
        <input autocomplete="on" type="text" id="ExamName" name="exName" value="" placeholder="Enter Exam Name"><br><br>
        <label for="ExamNum">Enter Exam Number</label>
        <input autocomplete="on" type="text" id="ExamNum" name="exNum" value="" placeholder="Enter Exam Number">
        <label for="time">Enter Exam Time</label>
        <input autocomplete="on" type="text" id="time" name="timer" placeholder="Enter Time Value">
        <label for="email">Enter Submission Email Address</label>
        <input autocomplete="on" type="email" id="email" name="subemail"
            placeholder="Enter Recipient Email Address"><br><br>
        <label for="className">Enter Class Name</label>
        <input autocomplete="on" type="text" id="className" name="classname" placeholder="Enter Class Name">
    </div>
    <div id="content">

    </div>
    <div id="btns">
        <button id="ad" onclick="addQuestion();" name="add" value="Add">Add</button>
        <button id="rm" onclick="remove();" name="remove" value="remove">Remove</button>
        <button id="sv" onclick="save();" name="save" value="save">Save</button>
        <button id="pr" onclick="print();" name="print" value="print">Download Question</button>
        <button id="mr" onclick="marks();" name="marks" value="marks">Marks</button>
        <input type="file" id="infile" name="filename[]" multiple="multiple">
        <button id="upanswer"
            onclick="window.open('https://github.com/slc131845/OnlineExamSystem/tree/master/answersheet','_blank')"
            name="answer" value="Upload AnswerSheet">Upload AnswerSheet</button>
        <button id="downloadResult" onclick="downloadResult();">Download Result</button>
        <button id="loadprev" onclick="loadPrev();">Load Previous</button>
    </div>

    <div id="frames">

    </div>
    <div id="result"></div>
    <script src="js/main.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.5.0/jszip.js"></script>
    <script src="js/FileSaver.js"></script>
</body>

</html>
