import {Component, OnInit} from '@angular/core';
import {NotificationSentService} from "../../../../backend/common/services/notification-sent.service";
import {NotificationSent} from "../../../../interfaces/notification-sent";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'ngx-notification-detail',
    templateUrl: './notification-detail.component.html',
    styleUrls: ['./notification-detail.component.scss']
})
export class NotificationDetailComponent implements OnInit {

    constructor(private notificationSentService: NotificationSentService,
                private fb: FormBuilder
    ) {
    }

    notificationDetailForm: FormGroup;
    notification: NotificationSent

    get subject() {
        return this.notificationDetailForm.get('subject');
    }

  get to() {
    return this.notificationDetailForm.get('to');
  }

  get createdAt() {
    return this.notificationDetailForm.get('createdAt');
  }

    ngOnInit(): void {
        this.initNotificationDetailForm()
        this.notificationSentService.getNotification(1).subscribe(response => {
            this.notification = response.data;
            this.loadNotificationData(this.notification)

        }, error => {
        })
    }

    initNotificationDetailForm() {
        this.notificationDetailForm = this.fb.group({
            subject: this.fb.control(''),
            to: this.fb.control(''),
            createdAt: this.fb.control(''),
        });
    }

    loadNotificationData(notificationSent: NotificationSent) {
        console.log(this.notification);
        this.notificationDetailForm.setValue({
            subject: notificationSent.subject,
            to: notificationSent.to,
            createdAt: notificationSent.createdAt,
        })
    }
}
