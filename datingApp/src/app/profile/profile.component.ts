import { Component } from '@angular/core';

@Component({
    selector: 'app-profile',
    template:    `
    <div> 
        <h3>Profile</h3>
        <p>{{name | nameLabel: 'Name: '}}</p>
        <p>{{age | ageLabel: 'Age: '}}</p>
        <p>Hotness: {{hotness}}</p>      
    </div>
    `
})

export class ProfileComponent{
    name = 'Omolola Ekeinde';
    age = 28;
    hotness = "10/10";
}