export class Projet {
  id_besoin:number;
  etat_projet:string;
  commentaire:string;
  constructor(id_besoin:number,
    etat_projet:string,
    commentaire:string){
      this.id_besoin=id_besoin;
      this.etat_projet=etat_projet;
      this.commentaire=commentaire;
    }
}
