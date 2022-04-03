import {Component, OnInit, Inject} from '@angular/core';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMess: string;

  // Old: without backend
  // selectedDish: Dish;

  constructor(private dishService: DishService,
              @Inject('BaseURL') private BaseURL) {
  }

  ngOnInit() {
    this.dishService.getDishes()
      // .then(dishes => this.dishes = dishes);
      .subscribe(dishes => this.dishes = dishes,
        errmess => this.errMess = <any>errmess);
      }

  // Old: without backend
  // onSelect(dish: Dish) {
  //   this.selectedDish = dish;
  // }

}
