import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'englishNumber',
  standalone: true
})
export class EnglishNumberPipe implements PipeTransform {
  farsi = ['۰','۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
  english = ['0','1','2','3','4','5','6','7','8','9']
  result = ''
  transform(num: string | number): string{
    num = num.toString()
    if(num == null || num == undefined || num==''){
      this.result = ''
      return ''
    }

    let Array = num.split('')
    this.result = ''
    Array.forEach((el, i)=>{
      if(!this.farsi.includes(el)){
        this.result += el
      }else{

        this.farsi.forEach((ell, j)=>{
          if(el == ell){
            this.result += this.english[j]
          }
        })
      }
    })
    return this.result
  }
}
