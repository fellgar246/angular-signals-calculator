import { ChangeDetectionStrategy, Component, computed, inject, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CalculatorService } from '@/calculator/services/calculator.service';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [
    CalculatorButtonComponent
  ],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)'
  },
})
export class CalculatorComponent {

  private calculatorService = inject(CalculatorService);
  public calculatorButtons = viewChildren(CalculatorButtonComponent)

  public resultText = computed(() => this.calculatorService.resultText());
  public subResultText = computed(() => this.calculatorService.subResultText());
  public lastOperator = computed(() => this.calculatorService.lastOperator());

  handleClick(value: string) {
    this.calculatorService.constructNumber(value);
  }

  //@HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event : KeyboardEvent) {
    const keyEquivalents: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      X: '*',
      '/': '÷',
      Enter: '=',
    }

    const key = event.key;
    const keyValue = keyEquivalents[key] ?? key;

    this.handleClick(keyValue);

    this.calculatorButtons().forEach((button) => {
      button.keyboardPressedStyle(keyValue);
    })
  }

}
