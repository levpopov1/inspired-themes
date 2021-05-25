import { iTheme, iColor } from "../interfaces";
import getContrast from './getContrast';

export default function exportConfig(theme: iTheme, colorType: keyof iColor){ 
return `:root{
  --color-primary: ${theme.colors["primary"][colorType]};
  --color-secondary: ${theme.colors["secondary"][colorType]};
  --color-highlight: ${theme.colors["highlight"][colorType]};
  --color-dark: ${theme.colors["dark"][colorType]};
  --color-light: ${theme.colors["light"][colorType]};
}

.bg-pirmary{
  background-color: var(--color-pirmary);
}

.bg-secondary{
  background-color: var(--color-secondary);
}

.bg-highlight{
  background-color: var(--color-highlight);
}

.bg-dark{
  background-color: var(--color-dark);
}

.bg-light{
  background-color: var(--color-light);
}

.text-pirmary{
  color: var(--color-pirmary);
}

.text-secondary{
  color: var(--color-secondary);
}

.text-highlight{
  color: var(--color-highlight);
}

.text-dark{
  color: var(--color-dark);
}

.text-light{
  color: var(--color-light);
}

.btn-pirmary{
  background-color: var(--color-pirmary);
  color: var(--color-${getContrast(theme.colors["primary"].hex)});
}

.btn-secondary{
  background-color: var(--color-secondary);
  color: var(--color-${getContrast(theme.colors["secondary"].hex)});
}

.btn-highlight{
  background-color: var(--color-highlight);
  color: var(--color-${getContrast(theme.colors["highlight"].hex)});
}

.btn-dark{
  background-color: var(--color-dark);
  color: var(--color-${getContrast(theme.colors["dark"].hex)});
}

.btn-light{
  background-color: var(--color-light);
  color: var(--color-${getContrast(theme.colors["light"].hex)});
}

.btn-outline-pirmary{
  background-color: transparent;
  color: var(--color-pirmary);
  border: 1px solid var(--color-pirmary);
}

.btn-outline-secondary{
  background-color: transparent;
  color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
}

.btn-outline-highlight{
  background-color: transparent;
  color: var(--color-highlight);
  border: 1px solid var(--color-highlight);
}

.btn-outline-dark{
  background-color: transparent;
  color: var(--color-dark);
  border: 1px solid var(--color-dark);
}

.btn-outline-light{
  background-color: transparent;
  color: var(--color-light);
  border: 1px solid var(--color-light);
}`;
}