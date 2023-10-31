import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
feauredPostsArray!: Array<any>
latestPostsArray!: Array<any>

constructor(private postService: PostsService){


}

  ngOnInit(): void {
    this.postService.loadFeatured().subscribe(val => {  
   
      this.feauredPostsArray = val
  })
  this.postService.loadLatest().subscribe(val => {  
     
    this.latestPostsArray = val
   
  })
}

}
