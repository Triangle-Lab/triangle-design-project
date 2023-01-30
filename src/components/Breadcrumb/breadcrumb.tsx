import React from 'react'
import classNames from 'classnames'

export interface BreadcrumbObjectsType {
  link: string
  text: string
}

// Breadcrumb
export interface BreadcrumbItemProps {
  objects: BreadcrumbObjectsType[]
  target?: '_blank' | '_self'
}

// 联合默认值
type NativeBreadcrumbProps = BreadcrumbItemProps & React.HTMLAttributes<HTMLElement>
export type BreadcrumbProps = Partial<NativeBreadcrumbProps>

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const { objects, target, ...restProps } = props
  const classes = classNames('breadcrumb')
  return (
        <div className={classes} {...restProps}>
            <ul className='breadcrumb-ul'>
                {objects?.map((obj, index) => {
                  return (
                      <>
                        <li key={index} className='breadcrumb-li'>
                            <a href={obj.link} target={target}>
                                {obj.text}
                            </a>
                          </li>
                          {index !== objects.length - 1 && <li className='breadcrumb-li'>/</li>}
                      </>
                  )
                })}
            </ul>
        </div>
  )
}

Breadcrumb.defaultProps = {
  target: '_self'
}

export default Breadcrumb
