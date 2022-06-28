import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthUserComponent } from './cors/auth-user/auth-user.component';
import { UserComponent } from './cors/user/user.component';

const routes: Routes = [
  {path:'',component:AuthUserComponent},
  {path:'',component:UserComponent,
  children:[
    {path:'home',
    loadChildren:()=>import('./views/user/home/home.module').then((h)=>h.HomeModule)
  },
  {path:'besoin',
  loadChildren:()=>import('./views/user/besoin/besoin.module').then((b)=>b.BesoinModule)
  },
  {path:'add-besoin',
  loadChildren:()=>import('./views/user/besoin/add-besoin/add-besoin.module').then((b)=>b.AddBesoinModule)
  },

  {path:'candidat',
  loadChildren:()=>import('./views/user/candidat/candidat.module').then((c)=>c.CandidatModule)
  },
  {path:'addCandidat',
  loadChildren:()=>import('./views/user/candidat/add-candidat/add-candidat.module').then((a)=>a.AddCandidatModule)
  },
  {path:'updateCandidat/:id',
  loadChildren:()=>import('./views/user/candidat/update-candidat/update-candidat.module').then((a)=>a.UpdateCandidatModule)
  },

  {path:'positionnement',
  loadChildren:()=>import('./views/user/positionnement/positionnement.module').then((po)=>po.PositionnementModule)
  },
  {path:'add-positionnement',
  loadChildren:()=>import('./views/user/positionnement/add-positionnement/add-positionnement.module').then((po)=>po.AddPositionnementModule)
  },
  {path:'projet',
  loadChildren:()=>import('./views/user/projet/projet.module').then((pro)=>pro.ProjetModule)
  },
  {path:'addProjet',
  loadChildren:()=>import('./views/user/projet/add-projet/add-projet.module').then((pro)=>pro.AddProjetModule)
  },
  {path:'ressource',
  loadChildren:()=>import('./views/user/ressource/ressource.module').then((r)=>r.RessourceModule)
  },
  {path:'addRessource',
  loadChildren:()=>import('./views/user/ressource/add-ressource/add-ressource.module').then((r)=>r.AddRessourceModule)
  },


  {path:'client',
  loadChildren:()=>import('./views/user/client/client.module').then((cl)=>cl.ClientModule)
  },
  {path:'addClient',
  loadChildren:()=>import('./views/user/client/add-client/add-client.module').then((m)=>m.AddClientModule)
  },
  {path:'updateClient/:id_societe',
  loadChildren:()=>import('./views/user/client/update-client/update-client.module').then((m)=>m.UpdateClientModule)
  },

  {path:'societe',
  loadChildren:()=>import('./views/user/societe/societe.module').then((sos)=>sos.SocieteModule)
  },
  {path:'add-societe',
  loadChildren:()=>import('./views/user/societe/add-societe/add-societe.module').then((a)=>a.AddSocieteModule)
  },
  {path:'updateSociete/:id_societe',
  loadChildren:()=>import('./views/user/societe/update-societe/update-societe.module').then((a)=>a.UpdateSocieteModule)
  },

  ]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
