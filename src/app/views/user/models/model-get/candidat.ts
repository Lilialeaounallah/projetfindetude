export class Candidat {
  id!:number;
  civilite: string;
  nom: string;
  prenom: string;
  Date_de_naissance: string;
  email: string;
  telephonne: number;
  adress: string;
  ville: string;
  code_postal: number;
  pays: string;
  libellet: string;
  provenance: string;
  disponibilite: string;
  mobilite: string;
  responsable_manager: string;
  agence: string;
  evaluation: string;
  commentaire :string;
  // constructor(){
  // }
  constructor(
    id:number,
    civilite: string,
    nom: string,
    prenom: string,
    Date_de_naissance: string,
    email: string,
    telephonne: number,
    adress: string,
    ville: string,
    code_postal: number,
    pays: string,
    libellet: string,
    provenance: string,
    disponibilite: string,
    mobilite: string,
    responsable_manager: string,
    agence: string,
    evaluation: string,
    commentaire :string
  ) {
    this.id=id;
    this.civilite = civilite;
    this.nom = nom;
    this.prenom = prenom;
    this.Date_de_naissance = Date_de_naissance;
    this.email = email;
    this.telephonne = telephonne;
    this.adress = adress;
    this.ville = ville;
    this.code_postal = code_postal;
    this.pays = pays;
    this.libellet = libellet;
    this.provenance = provenance;
    this.disponibilite = disponibilite;
    this.mobilite = mobilite;
    this.responsable_manager = responsable_manager;
    this.agence = agence;
    this.evaluation = evaluation;
    this.commentaire = commentaire;
  }

}


