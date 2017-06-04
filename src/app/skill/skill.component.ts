import { Component, OnInit } from '@angular/core';

import { Skill } from '../skill';

import { SkillService } from '../skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skills:Skill[] ;

  constructor( private _skillService: SkillService ) { }

  ngOnInit() {
    this.getSkills();
  }

 getSkills(){
     this._skillService.getSkills().subscribe(
     skills => this.skills = skills);
     console.log("Skills :" + JSON.stringify(this.skills));    
  }

   
}
