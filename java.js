var ran = Math.floor(Math.random() * ((3-0)+1) + 0);

const names = ["Ohoud Eid" , "Sarah Salamh" , "Ghadir ghazi" , "Shahad yahya"]
const ids = ["431004784" , "431008743" , "431000607" , "431005156"]
const imgs = ['trainer1.jpg' , 'trainer2.jpeg' , 'trainer3.jpeg' , 'trainer4.jpeg']
const info = [
    "Proven Job Trainer with a sound and diverse background in customer service, project management and problem solving. Focused professional who leads by attention to quality, customer relationships and service. " ,
    "Hardworking, organized, Job Trainer professional with a proven background delivering sensible business technology solutions on time and under budget while working as a team member or team leader." , 
    "As a Job Trainer, responsible for Assisting with the development, implementation, and updating of required written safety and health programs and plans, and also Ensuring monthly safety and other compliance training and <br>all other required training is provided for all employees." ,
    "To obtain a Job Trainer position with a company that will allow me to utilize my talents while giving me the opportunity to learn new skills."
]

document.getElementById("imgg").src = imgs[ran];
document.getElementById("name").innerHTML = names[ran];
document.getElementById("ids").innerHTML = ids[ran];
document.getElementById("desc").innerHTML = info[ran];