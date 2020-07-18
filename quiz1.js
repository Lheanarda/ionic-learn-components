const inputCourse = document.querySelector('#input-course');
const inputRating = document.querySelector('#input-rating');
const btnAdd = document.querySelector('#btn-add');
const coursesList = document.querySelector('#courses-list');

btnAdd.addEventListener('click',()=>{
    const enteredCourse = inputCourse.value;
    const enteredRating = inputRating.value;

    if(enteredCourse.trim().length <=0 || enteredRating.trim().length <=0 || enteredRating<0 || enteredRating>5){
        const alert = document.createElement('ion-alert');
        alert.header = 'Invalid inputs';
        alert.message = 'Please enter a valid reason and amount!';
        alert.buttons = ['Okay'];
        document.body.appendChild(alert);
        return alert.present();  
    }

    const newCourses = document.createElement('ion-item');
    newCourses.textContent = enteredCourse+" - "+enteredRating+"/5";
    coursesList.appendChild(newCourses)

    console.log(enteredCourse+" - "+enteredRating+"/5")
})