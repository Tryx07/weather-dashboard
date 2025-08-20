# Development Log

## Project Setup
- ✅ Initialized React app
- ✅ Configured Tailwind CSS  
- ✅ Created component structure
- ✅ Created design prototype
- ✅ Created WeatherCard component
- ✅ Created Navbar component
- ✅ Deployed on Vercel
- 🔄 Working on page design and layout structure

## Challenges & Solutions

### Issue: Initial plan included Java Spring Boot, PostgreSQL, TensorFlow for a simple weather app
- **Cause**: Trying to showcase too many technologies without understanding appropriate use cases
- **Solution**: Simplify to React + JavaScript + API calls + Tailwind CSS
- **Learning**: Choose technology stack based on problem requirements, not resume padding

---

### Issue: Unclear about what makes a project good
- **Cause**: Focused on complexity over execution quality
- **Solution**: Prioritize clean code, good documentation, and working deployment over feature quantity
- **Learning**: Well executed and simple is better than poorly executed and complex

---

### Issue: Tailwind arbitrary values (e.g. `rounded-[40px]`) did not work
- **Cause**: Old Tailwind version (v2 with postcss7-compat) → no arbitrary values support
- **Solution**: Upgraded to Tailwind v3 and reconfigured build
- **Learning**: Version conflicts can silently block features → always verify installed vs. registry version

---

### Issue: Dark mode styles were overridden
- **Cause**: Multiple `bg-*` classes (e.g. `bg-stone-100` + `dark:bg-gradient...`) → background always white
- **Solution**: Used `dark:bg-transparent` and built gradients with alpha colors
- **Learning**: Understood Tailwind class precedence and CSS background layering

---

### Issue: `isActive` state and props collided
- **Cause**: State variable and prop had the same name → ESLint warning *"assigned but never used"*  
- **Solution**: Used consistent naming (`activeTab` for state, `isActive` for props)  
- **Learning**: **Naming matters** – identical names in different scopes create confusion and bugs.  

---

### Issue: Spacing in Grid drifted
- **Cause**: Wrong assumption about row heights (`CELL + GAP` vs. actual grid distribution)  
- **Solution**: Either use fixed row heights (`grid-rows-[...]`) or place an individual rect per cell  
- **Learning**: With **CSS Grid** it’s better to work semantically (one component per row) rather than manually calculating pixel values.    

---

### Issue: First deployment on Vercel  
- **Solution**: Connected GitHub repo, set build + output, verified production build  
- **Learning**: Clean repo and knowing build artifacts is key for smooth deployment  

---

## Key Insights
- **Plan thoroughly**: Planning things out makes the development way easier
- **Documentation is key**: Helping others understand and keeping track of what you are doing
- **Keep it simple**: It's better doing one thing really good than multiple things poorly
- **Problem solving approach**: Do research - try solutions - document experiences
- **Naming matters**: Keep variable names consistent, meaningful and distinct.
- **Learning by debugging**: Most insights came from **errors and debugging**.


## Next Steps
- Design page components (Home, Dashboard, Settings, Location) and define overall layout structure
- Connect Navbar to pages via routing so active state reflects navigation
- Ensure consistent styling across pages (backgrounds, spacing, typography)
- Implement proper error handling and loading states
- Create comprehensive documentation
