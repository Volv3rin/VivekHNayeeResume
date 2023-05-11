const profileData = {
  title: "Resume",
  name: "Vivek H Nayee",
  sub_title: "IT Infrastructure Manager",
  logoURL: "assets/dp.jpeg",  
  about: { 
	intro: `As an IT Professional I am having more than 12years of experience in IT Infrastructure Design and Implementation 
	and have worked on various projects in multiple domains which includes
	IT Software Monitoring, Healthcare, IT services, Telecom sector.`,
    contact: {
      email: "viveknayee@outlook.com",
      phone: "+91-9727216292",
      address: "Navi Mumbai, IN"
    }
  },
  links: [
    //{ title: "Codepen", src: "https://codepen.io/imvpn22" },
    //{ title: "Github", src: "https://github.com/imvpn22" },
    { title: "LinkedIn", src: "https://www.linkedin.com/in/vivvekhnayee/" }
    //{ title: "Twitter", src: "https://twitter.com/imvpn22" }
    //{ title: "HackerEarth", src: "https://www.hackerearth.com/@imvpn22" },
  ],
  education: [
    {
      alma: "G.H Patel College of Engineering, Sardar Patel University",
      duration: "2006 - 2010",
      std: "B.E. Information Technology",
      score: "5.4 CGPA"
    },
    {
      alma: "St Mary’s School, GHSEB Board, Rajkot",
      duration: "2004 - 2006",
      std: "Class XI - XII",
      score: "65.40%"
    },
    {
      alma: "St Mary’s School, GHSEB Board, Rajkot",
      duration: "1992 - 2004",
      std: "Class X",
      score: "77.57%"
    }
  ],
  skills: [
    {
      category: "Operating Systems",
      topics: [ "RHEL", "Ubuntu", "OpenBSD", "FreeBSD", "Mandriva", "CentOS", "DebianOS", "Solaris 11", "SCO Unixware", "MacOSx Server", "Windows Server – 2003 2008/R2", "VmwareESXi 4&5", "IBM - AIX" ]
    },
    {
      category: "Tools",
      topics: [ "Docker", "Kubernetes", "Ansible","Terraform","Jenkins", "Bamboo", "Artifactory", "ElasticSearch", "LogStash", "Kibana", "JBOSS", "Varnish", "EMC Networker", "R1 soft & Symantec CPS","Zenoss", "Solarwinds/WhatsUp Gold/ThousandEyes Monitoring tools", "Nagios", "LiveVault backup tool", "CHEF utility", "HPOM","F5", "Nginx", "Azure App Gateway"]
    },
	{
      category: "LoadBalancers",
      topics: ["F5", "Nginx", "Azure App Gateway"]
    },
   {
      category: "Databases",
      topics: ["MYSQL", "PostgreSQL","Cassandra"]
    }   
  ], 
 projects: [
    {
      title: "Restaurant Review",
      duration: "June - Nov 2018",
      link: "https://github.com/imvpn22/restaurant-review-pwa",
      desc: "A web-app to list, view and add reviews of restaurents.
      The app includes filtering based on location, cuisine and rating.
      This project was a part of Udacity"s <strong>Mobile Web Specialist</strong> nano degree program.
      Developed using <strong>HTML5</strong>, <strong>CSS3</strong> and <strong>JavaScript</strong>
      with Progressive Web-Application standards including full-responsiveness,
      offline support and improved accessibility."
    },
    {
      title: "WhiteBoard",
      duration: "Jun - Aug 2017",
      link: "https://github.com/imvpn22/whiteboard",
      desc: `A simple <strong>web-app for collaborative brainstorming sessions</strong>.
      The app includes a real-time messaging and sketching platform for collaboration with Peers.
      It also has features to create groups(teams) and add/remove members.
      Developed using <strong>Node.js-Express</strong> with server-side-templating (EJS),
      <strong>CSS</strong>, <strong>JavaScript</strong> and <strong>Socket.io</strong>.`
    }
  ],
  experiences: [
    {
      organization: "Jio Platforms Ltd",
      title: "Manager - IT Infrastructure Support", 
      date: "OCT 2015 - Present",
      details: [
	    `Started working for Jio as a Deputy Manager - IT Infrastructure, I was involved and responsible for Infrastructure design specifications and implementations for in house project of <strong>Identity Management</strong>`
		`Successfully implemented Multi Site DR with GSLB (F5 Load balancer)`,
		`Successfully provided solutions w.r.t implementations and server resources for technology shift from OPENAM and Oracle to OPENSOURCE Nodejs and Cassandra Multi DC architecture,`
        `Promoted to Manager (JAN 2019-Present), my profile involved in providing effective solutions for network and infrastructure resource requirements while integrating with in house other business applications and also for cloud [Azure and Google Cloud Platform],`
		`Project scheduling and tracking with Vendors and different internal support teams.Involved in providing leadership and technical guidance to program management bodies and SME’s`
      ]
	},
	{
    organization: "Jio Platforms Ltd",
	  desc: "Deputy Manager - IT Infrastructure Support",
    date: "OCT 2015 - DEC 2018",
	details: [
    `Appointed as a Deputy Manager - IT Infrastructure, I was involved and responsible for Infrastructure design specifications and implementations for in house project of //<strong>Identity Management</strong>.`
	`Successfully implemented Multi Site DR with GSLB (F5 Load balancer).`
	`Successfully provided solutions w.r.t implementations and server resources for technology shift from OPENAM and Oracle to OPENSOURCE Nodejs and Cassandra Multi DC //architecture.`
      ]
	},
    {
      organization: "IGATE Global Solution Ltd",
      title: `Senior Systems Engineer`,
      desc: `Project Engineer`,
      date: "OCT 2014 - SEPT 2015",
      details: [
        `As a Senior Systems engineer my profile was to work for multiple AIX/Linux projects.` 
		`Got a good exposure to change management systems, planned firmware upgrades, OS upgrades, Database patching along with mentoring junior team members.`
      ]
    },
    {
      organization: "eClinicalWorks India Pvt Ltd",
      title: `Systems Administrator`,
      desc: `<strong>Systems Administrator</strong> at  <a target='_blank' rel='noreferrer' href='https://www.venuemonk.com/'>
      <strong> Venuemonk </strong> </a> (<a target='_blank' rel='noreferrer' href='https://drive.google.com/open?id=1ch_9x9jCp_TJwKY43FG-pCr_zV9H2iun'> https://goo.gl/Uz1gaf</a>)`,
      date: "MAY 2013 - SEPT 2014",
      details: [
        `Working as a Systems Administrator, I got experience to manage remote Datacenter operations, Production systems health checks, migration of Datacenters on Hypervisors and in cloud, along with exposure to Firewalls and Network Monitoring and Security aspects`, 
		`Successfully implemented Datacenter Monitoring solutions which were useful for Trend Analysis, RCA and various other reports for optimized Datacenter operations.`,
		`Exposure to Virtualization and Clustering with VCenter and VMotion for migration, HA, clustering and management of ESX servers.`
      ]
    },
    {
      organization: "MindArray Systems Pvt Ltd",
      title: "System Administrator",
    desc: `<strong>System Administrator</strong> at <a target="_blank" rel="noreferrer" href="https://hasura.io/">
    <strong> Hasura </strong> </a> (<a target="_blank" rel="noreferrer" href="https://goo.gl/8V3jBy"> https://goo.gl/8V3jBy</a>)`,
      date: "MAY 2011 - FEB 2013",
      details: [
        "Start of career by managing the local area network for this firm, learning all the Network and Servers basics, email clients configurations and set up VMware systems on blade servers, installation and configuration of AIX box for the Network performance software implementation (in house product), along with managing testing and Staging  environment readiness, performance tuning and health reports via various tools"
      ]
    }
  ],
  certifications: [
    {
      desc: `<strong>RedHat Certified Systems Administrator</strong> - <strong>RHCSA</strong>.`,
      date: "AUG 2011 - 2014",
    },
	{
      desc: `<strong>RedHat Certified Engineer</strong> - <strong>RHCE</strong>.`,
      date: "AUG 2011 - 2014",
    },
	{
      desc: `<strong>VMware Certified Associate</strong> - <strong>VCA</strong>.`,
     date: "June 2014",
    },
  ],
  events: []
};
