import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'farsiNumber',
  standalone: true
})
export class FarsiNumberPipe implements PipeTransform {
  farsi = ['۰','۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
  english = ['0','1','2','3','4','5','6','7','8','9']
  result = ''
  transform(num: string | number): string {
    if(num == null || num == undefined || num==''){
      this.result = ''
      return ''
    }

    num = num.toString()
    let Array = num.split('')
    this.result = ''
    Array.forEach((el, i)=>{
      if(!this.english.includes(el)){
        this.result += el
      }else{

        this.english.forEach((ell, j)=>{
          if(el == ell){
            this.result += this.farsi[j]
          }
        })
      }
    })
    return this.result
  }

  }

