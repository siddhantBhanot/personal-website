import React from "react";
import { FaJava } from "react-icons/fa6";
import {
  SiKotlin,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiSpringboot,
  SiSpring,
  SiSpringsecurity,
  SiHibernate,
  SiReact,
  SiNextdotjs,
  SiMysql,
  SiRedis,
  SiApachekafka,
  SiElasticsearch,
  SiMongodb,
  SiGit,
  SiDocker,
  SiJenkins,
  SiKibana,
  SiPostman,
  SiJunit5,
  SiSonarqubeserver,
  SiApachejmeter,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";

export const TECH_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Java: FaJava,
  Kotlin: SiKotlin,
  JavaScript: SiJavascript,
  Python: SiPython,
  "C++": SiCplusplus,
  SQL: TbDatabase,
  "Spring Boot": SiSpringboot,
  "Spring WebFlux": SiSpring,
  "Spring Security": SiSpringsecurity,
  Hibernate: SiHibernate,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  MySQL: SiMysql,
  Redis: SiRedis,
  "Apache Kafka": SiApachekafka,
  Elasticsearch: SiElasticsearch,
  MongoDB: SiMongodb,
  Git: SiGit,
  Docker: SiDocker,
  Jenkins: SiJenkins,
  Kibana: SiKibana,
  Postman: SiPostman,
  JUnit: SiJunit5,
  SonarQube: SiSonarqubeserver,
  "Apache JMeter": SiApachejmeter,
};

export function hasTechIcon(name: string): boolean {
  return name in TECH_ICON_MAP;
}

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "w-4 h-4" }: TechIconProps) {
  const IconComponent = TECH_ICON_MAP[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}
