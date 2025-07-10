import React, { useState, createContext, useContext } from 'react';
import type { ReactNode } from 'react';

// Context for select value
const SelectContext = createContext<{
  value: string;
  setValue: (v: string) => void;
} | null>(null);

interface SelectProps {
  value: string;
  onValueChange: (v: string) => void;
  children: ReactNode;
}

export const Select = ({ value, onValueChange, children }: SelectProps) => {
  const [open, setOpen] = useState(false);
  return (
    <SelectContext.Provider value={{ value, setValue: onValueChange }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {React.Children.map(children, child =>
          React.isValidElement<{ open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }>(child)
            ? React.cloneElement(child, { open, setOpen })
            : child
        )}
      </div>
    </SelectContext.Provider>
  );
};

interface SelectTriggerProps {
  children: ReactNode;
  className?: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SelectTrigger = ({ children, className = '', setOpen }: SelectTriggerProps) => (
  <button
    type="button"
    className={className}
    onClick={() => setOpen((o) => !o)}
    style={{ minWidth: 100, padding: 8, border: '1px solid #ccc', borderRadius: 4 }}
  >
    {children}
  </button>
);

interface SelectContentProps {
  children: ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SelectContent = ({ children, open, setOpen }: SelectContentProps) => {
  if (!open) return null;
  return (
    <div style={{ position: 'absolute', background: '#fff', border: '1px solid #ccc', zIndex: 10, marginTop: 4 }}>
      {React.Children.map(children, child =>
        React.isValidElement<{ setOpen: React.Dispatch<React.SetStateAction<boolean>> }>(child)
          ? React.cloneElement(child, { setOpen })
          : child
      )}
    </div>
  );
};

interface SelectItemProps {
  value: string;
  children: ReactNode;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

export const SelectItem = ({ value, children, setOpen, className = '' }: SelectItemProps) => {
  const ctx = useContext(SelectContext);
  if (!ctx) return null;
  return (
    <div
      className={className}
      style={{ padding: 8, cursor: 'pointer' }}
      onClick={() => {
        ctx.setValue(value);
        setOpen(false);
      }}
    >
      {children}
    </div>
  );
};

export const SelectValue = ({ children }: { children: ReactNode }) => <span>{children}</span>; 