export class Posiionnement {
  id_candidat:number;
  id_besoin:number;
  etat_positionnement:number;
  constructor(id_candidat:number,
    id_besoin:number,
    etat_positionnement:number){
      this.id_candidat=id_candidat;
      this.id_besoin=id_besoin;
      this.etat_positionnement=etat_positionnement;
    }

}
