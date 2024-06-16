import { Component, Input } from '@angular/core';

@Component({
  selector: 'theme-mode-btn',
  templateUrl: './theme-mode-btn.component.html',
  styleUrls: ['./theme-mode-btn.component.scss'],
})
export class ThemeModeBtnComponent {
  mode = true;
  @Input() type = 'primary';

  constructor() {
    this.detectTheme();
  }

  detectTheme(){
    const html = document.querySelector('html');
    (html!.getAttribute('data-bs-theme')=="dark")?
      this.mode = false : this.mode = true;
  }

  changeTheme() {
    const html = document.querySelector('html');
    if(html!.getAttribute('data-bs-theme')=="dark" && this.mode == false){
      html!.setAttribute('data-bs-theme',"light");
      this.mode = true;
    }else{
      html!.setAttribute('data-bs-theme',"dark");
      this.mode = false;
    }
  }
}
