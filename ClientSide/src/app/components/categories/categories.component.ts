import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from './../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{

  categories: any = [];
  errMsg: any = '';

  constructor(private CategoriesService: CategoriesService, private router: Router) {}

  ngOnInit(): void {
    this.CategoriesService.getAllCategories().subscribe({
      next: data => this.categories = data,
      error: err => this.errMsg = err
    })
  }
}
