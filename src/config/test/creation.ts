// stepConfigs.ts
import EvaluationVariantStep from '@/components/composite/Evaluations/Creation/Steps/EvaluationVariantStep';
import EvaluationSubjectStep from '@/components/composite/Evaluations/Creation/Steps/EvaluationSubjectStep';
import VerificationStep from '@/components/composite/Evaluations/Creation/Steps/VerificationStep';
import EvaluationCreatedSuccessStep from '@/components/composite/Evaluations/Creation/Steps/EvaluationCreatedSuccessStep';
import AIPromptStep from '@/components/composite/Evaluations/Creation/Steps/AIPromptStep';
import ProcessingStep from '@/components/composite/Evaluations/Creation/Steps/ProcessingStep';
import ReviewQuestions from '@/components/composite/Evaluations/ReviewQuestions';

export interface StepConfig {
  label: string;
  component: React.FC<StepProps>;
  hideStepper?: boolean;
  hideFooter?: boolean;
}

export interface StepProps {
  selectedOption?: 'company' | 'department' | null;
  handleSelect?: (option: 'company' | 'department') => void;
  selectedDepartment?: string[];
  selectedTest?: string;
  onProcessingComplete?: () => void;
  handlePromptChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDepartmentChange?: (
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    event: React.ChangeEvent<{}>,
    value: string[]
  ) => void;
  handleTestChange?: (event: React.ChangeEvent<{ value: unknown }>) => void;
  onPreview?: () => void;
  promptText?: string;
  steps?: string[];
}

export type StepSequenceType = 'assignTest' | 'createWithAIAndAssign';

export const stepSequences: Record<string, StepConfig[]> = {
  assignTest: [
    { label: 'Test', component: EvaluationVariantStep as React.FC<StepProps> },
    {
      label: 'Departman/Test',
      component: EvaluationSubjectStep as React.FC<StepProps>,
    },
    { label: 'Onay', component: VerificationStep as React.FC<StepProps> },
    {
      label: 'Tamamlandı',
      component: EvaluationCreatedSuccessStep as React.FC<StepProps>,
    },
  ],
  createWithAIAndAssign: [
    { label: 'Test', component: EvaluationVariantStep as React.FC<StepProps> },
    { label: 'Hedef', component: EvaluationSubjectStep as React.FC<StepProps> },
    { label: 'Açıklama', component: AIPromptStep as React.FC<StepProps> },
    { label: 'Kontrol', component: VerificationStep as React.FC<StepProps> },
    {
      label: 'İşleniyor',
      component: ProcessingStep as React.FC<StepProps>,
      hideStepper: true,
      hideFooter: true,
    },
    {
      label: 'Onay',
      component: EvaluationCreatedSuccessStep as React.FC<StepProps>,
      hideFooter: true,
    },
    {
      label: 'İncele',
      hideStepper: true,
      component: ReviewQuestions as React.FC<StepProps>,
    },
  ],
};
