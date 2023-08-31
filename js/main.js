const date = document.getElementById('date');
let day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
let type = document.getElementById('type');

function inputsDate(){
    month.setAttribute("type","text");
    year.setAttribute("type","text");
    /*=============   Start Day  =============*/
    day.onfocus = function(){
            day.setAttribute("type","number");
        if(day.value.length == 2){
            day.value="";
        }
        year.setAttribute('type','text')
        if(day.value == "" || day.value == 0){
            day.focus();
        }
    }
    day.onkeyup = function(){
        if(day.value.length > 1){
            if(day.value < day.getAttribute('min')){
                day.value = day.getAttribute('min');
                year.focus();
            }
            else if(day.value > day.getAttribute('max')){
                day.value = day.getAttribute('max');
                month.focus();
            }
            else{
                month.focus();
            }
        }
    }
    /*=============   End Day  =============*/
    /*=============   Start Month  =============*/
    month.onfocus = function(){
        if(day.value.length > 2){
            day.value="";
        }
        if(month.value.length == 2){
            console.log("ahmed");
            month.value="";
        }
        year.setAttribute('type','text')
        if(day.value == "" || day.value == 0){
            month.setAttribute("type","text");
            day.focus();
        }
        else{
            month.setAttribute("type","number");
            day.setAttribute("type","text");
        }
        if(day.value < 10 && day.value >= 1 && day.value != ""){
            if(day.value[0] == 0){
                day.value = day.value;
            }
            else{
                day.value = 0 + day.value;
            }
            month.focus(); 
        }
    }
    month.onkeyup = function(){
        if(month.value.length > 1){
            if(month.value < month.getAttribute('min')){
                month.value = month.getAttribute('min');
                year.focus();
            }
            else if(month.value > month.getAttribute('max')){
                month.value = month.getAttribute('max');
                year.focus();
            }
            else{
                year.focus();
            }
        }
    }
    /*=============   End Month  =============*/
    /*=============   Start Year  =============*/
    year.onfocus = function(){
        month.setAttribute('type','text')
        if(month.value == "" || month.value == 0){
            month.focus();
        }
        else if(month.value.length > 2){
            month.value ="";
            month.focus();  
        }
        else{
            year.setAttribute('type','number');
            if(year.value.length == 4){
                year.value = "";
            }
            if(month.value < 10 && month.value >= 1 && month.value != ""){
                if(month.value[0] == 0){
                    month.value = month.value;
                }
                else{
                    month.value = 0 + month.value;
                }
                year.focus(); 
            }
            else{
                month.value = month.value;
            }
        }
    }
    year.onkeyup = function(){
        if(year.value.length > 3){
            if(year.value < year.getAttribute('min')){
                year.value = year.getAttribute('min');
                type.focus();
            }
            else if(year.value > year.getAttribute('max')){
                year.value = year.getAttribute('max');
                type.focus()
            }
            else{
                type.focus();
            }
        }
        else{
            type.onfocus = function(){
                if (year.value.length < 3) {
                    year.focus();
                }
            }
        }
    }
    year.onblur = function (){
        if(year.value == ""){
            year.setAttribute('type','text');
        }
    }
    /*=============   End Year  =============*/
}

inputsDate();
/*================= Start Educayion ============*/
const education = document.getElementById('selcEducation');
let college = document.getElementById('college-name');
education.onchange = function(){
    if(education.value == 1){
        college.classList.add('vis')
    }
    else{
        college.classList.remove('vis');
    }
}
/*================= End Educayion ============*/
/*=============    Start Invalit  ===============*/
const resBtn = document.getElementById('resbtn');
let label = document.querySelectorAll('form .lab');
resBtn.onclick = function(event){
    event.preventDefault();
    label.forEach((e)=>{
        const inpInvalid = e.querySelector('.invalid');
        if(inpInvalid.value.trim() == ""){
            const txtInvalid = e.querySelector('.invalid-txt');
            txtInvalid.style.display = "block";
            // this Check For Collage Name
            if(college.classList == 'vis'){
                const inp = college.querySelector('input');
                if (inp.value == "") {
                    const collinv = document.getElementById('collinv');
                    collinv.style.display = "block";
                }
            }
        }
    })
}
/*======== Start Clear invalid When onkeyup in input ==========*/
label.forEach((e,i)=>{
    const allInp = e.querySelector('input');
    const allspan = e.querySelector('span');
    allInp.onkeyup = function(){
        allspan.style.display = 'none';
    }
})
college.onkeyup = function(){
    const collSpan = college.querySelector('span');
    collSpan.style.display = 'none';
}
/*======== End Clear invalid When onkeyup in input ==========*/

