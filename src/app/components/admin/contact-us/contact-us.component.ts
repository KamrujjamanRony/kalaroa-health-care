import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CoverComponent } from '../../shared/cover/cover.component';
import { ContactService } from '../../../features/services/contact.service';
import { environment } from '../../../../environments/environments';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  standalone: true,
  imports: [CoverComponent, FormsModule]
})
export class ContactUsComponent implements OnInit, OnDestroy {
  yourTitle: any = 'Update Contact Us';
  yourSub1: any = 'Dashboard';
  yourSub2: any = 'Contact Us';
  id: any | null = null;
  addressInfo?: any;
  paramsSubscription?: Subscription;
  editAddressSubscription?: Subscription;
  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getCompanyAddress()
      .subscribe({
        next: (response) => {
          this.addressInfo = response;
        }
      });
  }

  onFormSubmit(): void {

    const formData = new FormData();

    formData.append('companyID', environment.hospitalCode.toString());
    formData.append('address1', this.addressInfo?.address1 ?? '');
    formData.append('address2', this.addressInfo?.address2 ?? '');
    formData.append('phoneNumber1', this.addressInfo?.phoneNumber1 ?? '');
    formData.append('phoneNumber2', this.addressInfo?.phoneNumber2 ?? '');
    formData.append('phoneNumber3', this.addressInfo?.phoneNumber3 ?? '');
    formData.append('email', this.addressInfo?.email ?? '');
    formData.append('facebookLink', this.addressInfo?.facebookLink ?? '');
    formData.append('othersLink1', this.addressInfo?.othersLink1 ?? '');
    formData.append('othersLink2', this.addressInfo?.othersLink2 ?? '');

    if (this.id) {
      this.editAddressSubscription = this.contactService.updateAddress(this.addressInfo.id, formData)
        .subscribe({
          next: (response) => {
            this.router.navigate(['contact']);
          }
        });
    }
  };

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.editAddressSubscription?.unsubscribe();
  }
}
