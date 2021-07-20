export interface Componente{
    icon:string;
    name:string;
    redirectTo:string;
};

export interface MenuI{
    titulo: string;
    url: string;
    icon: string;
};

const domIP= "localhost";
export const urlSocket= `http://${domIP}:3000`;
export const urlServices= `${urlSocket}/api/`;
