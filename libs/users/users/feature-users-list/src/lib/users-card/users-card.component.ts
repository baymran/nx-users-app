import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersVM } from '../../../../users-vm';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'users-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersCardComponent {
  @Input({ required: true })
  user!: UsersVM

  @Output() deleteUser = new EventEmitter();
  @Output() redirectToEdit = new EventEmitter()

  onDeleteUser() {
    this.deleteUser.emit();
  }

  redirectToEditPage(editMode: boolean, event: Event) {
    event.stopPropagation();
    const emitData = {
      id: this.user.id,
      editMode
    }
    this.redirectToEdit.emit(emitData)
  }
}