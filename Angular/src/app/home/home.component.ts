import {Component, OnInit, Inject} from '@angular/core';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';
import {Promotion} from '../shared/promotion';
import {PromotionService} from '../services/promotion.service';
import {LeaderService} from '../services/leader.service';
import {Leader} from '../shared/leader';
import {expand, flyInOut} from '../animations/app.animation';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  dishErrMess: string;
  promErrMess: string;
  leadErrMess: string;

  constructor(private dishService: DishService,
              private promotionService: PromotionService,
              private leaderService: LeaderService,
              @Inject('BaseURL') private BaseURL) {
  }

  ngOnInit() {
    this.dishService.getFeaturedDish()
      // .then(dish => this.dish = dish);
      // .subscribe(dish => this.dish = dish);
      .subscribe(dish => this.dish = dish,
        dishErrMess => this.dishErrMess = <any>dishErrMess);

    this.promotionService.getFeaturedPromotion()
      // .then(promotion => this.promotion = promotion);
      .subscribe(promotion => this.promotion = promotion,
        promErrMess => this.promErrMess = <any>promErrMess);


    this.leaderService.getFeaturedLeader()
      // .then(leader => this.leader = leader);
      .subscribe(leader => this.leader = leader,
        leadErrMess => this.leadErrMess = <any>leadErrMess);
  }

}
