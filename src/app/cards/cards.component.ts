import { Component, OnInit } from '@angular/core';
import { Perfiles } from './perfiles.models';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  dataShow="gridType"
  first_name=""
  last_name=""
  job=""
  street_addres=""
  perfilesCopy: any;
  filtradoInput ="";
  perfiles: Perfiles[]=[
{"id":1,"image_avatar":"","first_name":"Dacia","last_name":"Syphas","job":"Software Consultant","street_addres":"6634 Scoville Avenue"},
{"id":2,"image_avatar":"","first_name":"Enrico","last_name":"Drewson","job":"Registered Nurse","street_addres":"7 Pearson Terrace"},
{"id":3,"image_avatar":"","first_name":"Glory","last_name":"Follet","job":"Research Associate","street_addres":"30 Birchwood Trail"},
{"id":4,"image_avatar":"","first_name":"Jennica","last_name":"Boulds","job":"Senior Quality Engineer","street_addres":"5 Texas Avenue"},
{"id":5,"image_avatar":"","first_name":"Torre","last_name":"Lodin","job":"Librarian","street_addres":"28345 Scott Plaza"},
{"id":6,"image_avatar":"","first_name":"Tawnya","last_name":"Trowill","job":"Nuclear Power Engineer","street_addres":"19 Quincy Road"},
{"id":7,"image_avatar":"","first_name":"Madelaine","last_name":"Strowthers","job":"Dental Hygienist","street_addres":"80 School Terrace"},
{"id":8,"image_avatar":"","first_name":"Eugenius","last_name":"Seifert","job":"VP Quality Control","street_addres":"7 Eastwood Junction"},
{"id":9,"image_avatar":"","first_name":"Eamon","last_name":"Fishby","job":"Pharmacist","street_addres":"536 Westport Lane"},
{"id":10,"image_avatar":"","first_name":"Kittie","last_name":"Pontefract","job":"Information Systems Manager","street_addres":"817 Farmco Circle"},
{"id":11,"image_avatar":"","first_name":"Albina","last_name":"Yurtsev","job":"Project Manager","street_addres":"57 Jenna Avenue"},
{"id":12,"image_avatar":"","first_name":"Leonhard","last_name":"Phant","job":"Registered Nurse","street_addres":"20 Melvin Lane"},
{"id":13,"image_avatar":"","first_name":"Pamella","last_name":"Giacobillo","job":"Office Assistant IV","street_addres":"4 Bayside Way"},
{"id":14,"image_avatar":"","first_name":"Josh","last_name":"Banyard","job":"Structural Analysis Engineer","street_addres":"22 Golden Leaf Way"},
{"id":15,"image_avatar":"","first_name":"Dniren","last_name":"Ditts","job":"VP Sales","street_addres":"1 Florence Avenue"},
{"id":16,"image_avatar":"","first_name":"Lorri","last_name":"Mellodey","job":"Geological Engineer","street_addres":"01735 Ilene Street"},
{"id":17,"image_avatar":"","first_name":"Gayle","last_name":"Gosnell","job":"Marketing Assistant","street_addres":"57 Hermina Road"},
{"id":18,"image_avatar":"","first_name":"Selestina","last_name":"Castelain","job":"Administrative Assistant II","street_addres":"342 Blaine Road"},
{"id":19,"image_avatar":"","first_name":"Clayson","last_name":"Bowskill","job":"General Manager","street_addres":"74958 Oriole Circle"},
{"id":20,"image_avatar":"","first_name":"Fleming","last_name":"Colvin","job":"Librarian","street_addres":"91 Commercial Parkway"}
  ]
  constructor() { }

  ngOnInit(): void {
    this.perfiles.forEach( p =>{
      p.image_avatar = "https://i.pravatar.cc/150?img="+p.id;
    })
    this.perfilesCopy = [...this.perfiles]
  }

  addTarjet(){
        let image = "https://i.pravatar.cc/150?img="+Number(this.perfilesCopy.length + 1);
        let card = new Perfiles(this.perfilesCopy[this.perfilesCopy.length -1]?.id+1,image,this.first_name,this.last_name,this.job,this.street_addres)
        console.log(this.perfilesCopy)
        this.perfilesCopy.push(card)
        this.first_name = ""
        this.last_name= ""
        this.job =""
        this.street_addres=""
  }

  filter(){
  if(!this.filtradoInput){
      this.perfilesCopy = this.perfiles
  }else{
     this.perfilesCopy = this.perfiles.filter( (perfilesCopy:any) => perfilesCopy.first_name.toLocaleLowerCase().includes(this.filtradoInput.toLocaleLowerCase()))   
        }
  }

  deleteCard(e: Event){
  let index = this.perfilesCopy.findIndex( (p:any) => p.id  == Number(e)) 
    console.log(index)
    if(index != -1){
      this.perfilesCopy.splice(index, 1)
      this.perfiles.splice(index, 1)
    }
  }
  deleteCardGrid(i:number){
  console.log(i)

    let index = i 
      console.log(index)
      if(index != -1){
        this.perfilesCopy.splice(index, 1)
        this.perfiles.splice(index, 1)
      }
    }

    changeType(){
      if(this.dataShow == "gridType"){
        this.dataShow = "cardType"
      }else{
        this.dataShow = "gridType"
      }
    }


  

}
