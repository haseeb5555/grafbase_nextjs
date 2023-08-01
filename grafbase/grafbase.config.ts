import { g, auth, config } from '@grafbase/sdk'


const User = g.model('User', {
   name:g.string(),
   email:g.string().unique(),
   avatarUrl:g.url(),
   description:g.string().optional(),
   githubUrl:g.string().optional(),
   linkedInUrl:g.string().optional(),
   projects:g.relation(()=>Project).list().optional(),
})

const Project = g.model('Project',{
   title:g.string(),
   description:g.string().optional(),
   image:g.url(),
   liveSiteUrl:g.url(),
   githubUrl:g.url(),
   category:g.string().search(),
   createdBy:g.relation(()=>User)

})
export default config({
  schema: g

})
