import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-posts',
  templateUrl: './single-posts.component.html',
  styleUrls: ['./single-posts.component.css']
})
export class SinglePostsComponent implements OnInit {

  postData!: any
  similarPostArray: any


constructor(private route: ActivatedRoute, private postService: PostsService){}


  ngOnInit(): void {
    this.route.params.subscribe(val => {
      this.postService.countViews(val['id'])
      this.postService.loadOnePost(val['id']).subscribe(post => {
        this.postData = post
        this.loadSimilarPosts(this.postData.category.categoryId)

      })
    })

  }

  loadSimilarPosts(catId: any){
    this.postService.loadSimilar(catId).subscribe(val =>{
this.similarPostArray = val;
    })
  }
  

}
