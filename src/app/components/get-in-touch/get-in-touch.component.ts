import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-in-touch',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.scss'
})
export class GetInTouchComponent {
  messages: { text: string; isUser: boolean }[] = [];
  newMessage: string = '';

  sendMessage(): void {
    if (this.newMessage.trim()) {
      // Adiciona a mensagem do usuário
      this.messages.push({ text: this.newMessage, isUser: true });

      // Simula a resposta do bot
      setTimeout(() => {
        this.messages.push({ text: 'Esta é uma resposta automática do bot.', isUser: false });
      }, 1000);

      // Limpa o campo de mensagem
      this.newMessage = '';
    }
  }
}
