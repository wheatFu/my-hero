import { Component } from '@angular/core';


// @component 装饰器,为ng组件指定源数据
@Component({
  selector: 'app-root', // 选择器
  templateUrl: './app.component.html', // 模板内容
  styleUrls: ['./app.component.css'] // 模板css私有
})
export class AppComponent {
  title = 'my-hero';
}
