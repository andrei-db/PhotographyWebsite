
var pictureContainer=document.querySelectorAll('#portfolio .container-fluid .col-3');
var pictureBtn=document.querySelectorAll('#portfolio .container-fluid .col-3 span');

for(let i=0;i<pictureContainer.length;i++){
  pictureContainer[i].addEventListener("mouseover", () => {
    pictureBtn[i].classList.add('view-picture-a');
  }),true;
  pictureContainer[i].addEventListener("mouseout", () => {
    pictureBtn[i].classList.remove('view-picture-a');
  });
}
