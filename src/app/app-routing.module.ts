import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './cors/admin/admin.component';
import { AuthUserComponent } from './cors/auth-user/auth-user.component';
import { UserComponent } from './cors/user/user.component';

const routes: Routes = [
  {path:'',component:AuthUserComponent},
  {path:'',component:UserComponent,
  children:[
    {path:'home',
    loadChildren:()=>import('./views/user/home/home.module').then((h)=>h.HomeModule)
  },
  {path:'login',
  loadChildren:()=>import('./views/user/login/login.module').then((l)=>l.LoginModule)

  },
  {path:'besoin',
  loadChildren:()=>import('./views/user/besoin/besoin.module').then((b)=>b.BesoinModule)
  },
  {path:'candidat',
  loadChildren:()=>import('./views/user/candidat/candidat.module').then((c)=>c.CandidatModule)
  },
  {path:'addCandidat',
  loadChildren:()=>import('./views/user/add-candidat/add-candidat.module').then((a)=>a.AddCandidatModule)
  },
  {path:'updateCandidat/:id',
  loadChildren:()=>import('./views/user/update-candidat/update-candidat.module').then((a)=>a.UpdateCandidatModule)
  },
  {path:'detailsCandidat/:id',
  loadChildren:()=>import('./views/user/details-candidat/details-candidat.module').then((a)=>a.DetailsCandidatModule)
  },
  {path:'deleteCandidat/:id',
  loadChildren:()=>import('./views/user/delete-candidat/delete-candidat.module').then((d)=>d.DeleteCandidatModule)
  },
  {path:'positionnement',
  loadChildren:()=>import('./views/user/positionnement/positionnement.module').then((po)=>po.PositionnementModule)
  },
  {path:'projet',
  loadChildren:()=>import('./views/user/projet/projet.module').then((pro)=>pro.ProjetModule)
  },
  {path:'ressource',
  loadChildren:()=>import('./views/user/ressource/ressource.module').then((r)=>r.RessourceModule)
  },
  {path:'societe',
  loadChildren:()=>import('./views/user/societe/societe.module').then((s)=>s.SocieteModule)
  },
  {path:'client',
  loadChildren:()=>import('./views/user/client/client.module').then((cl)=>cl.ClientModule)
  }

  ]

},


  {path:'admin',component:AdminComponent,
children:[
  {path:'dashbord',
  loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then((d)=>d.DashboardModule)},

  {path:'societe',
  loadChildren:()=>import('./views/admin/societe/societe.module').then((s)=>s.SocieteModule)

}

]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
