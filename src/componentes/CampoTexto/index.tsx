import "./CampoTexto.css";
import React from "react";

interface CampoTextoProps {
  placeholder: string;
  label: string;
  valor: string;
  aoAlterado: (valor: string) => void;
  obrigatorio?: boolean;
}

const CampoTexto = ({
  placeholder,
  label,
  valor,
  aoAlterado,
  obrigatorio = false,
}: CampoTextoProps) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
