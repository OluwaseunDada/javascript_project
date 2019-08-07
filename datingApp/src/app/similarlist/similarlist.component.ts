import { Component } from '@angular/core';

@Component({
    selector: 'app-similarlist',
    template: 
    `
    <div> 
        <h3>Similar Matches</h3>
        <ul>
            <li *ngFor= "let profile of profiles">
                <a href = "#"><app-shortprofile [profile]="profile" ></app-shortprofile></a>
            </li>
        </ul>
        
    </div>
    `

    
})

export class SimilarListComponent{
    profiles = [
        'Hot African ladies',
        'Blonde European ladies',
        'Slim Asian beauties'
    ]
}