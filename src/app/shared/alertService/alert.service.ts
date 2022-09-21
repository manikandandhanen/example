import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastr: ToastrService) { }
  showSuccess(message){
    this.toastr.success(message)
}
 
showError(message){
    this.toastr.error(message)
}
 
showInfo(message){
    this.toastr.info(message)
}
 
showWarning(message){
    this.toastr.warning(message)
}

}