import Link from 'next/link'
import {  DocumentConfig } from 'tinacms-doc-toolkit'

const CONFIG: DocumentConfig = {
    LinkWrapper: ({to, children})=>{
      return <Link href={`/[...slug]`} as={`${to}`}>{children}</Link>
    },
    title: 'Tinacms + Google Sheets Plugin',
    pages: [
        { filePath: "Intro" ,label: 'Intro',  slug: '/', },
        { filePath: "CmsInstance" , label: 'Creating the CMS Instance',  slug: '/intro-cms',},
        { filePath: "Form" , label: 'Using a Tina Form',  slug: '/form',},
    ],
    tinaConfig: {
      enabled: false,
    }
}

export const loadComponent = async (fileName: string) => {
  try {
    const component = await import(`./docs/${fileName}.mdx`);
    return component;
  } catch (e) {
    console.error(`${fileName} was not found`);
    console.error(e);
    throw e;
  }
};

export default CONFIG