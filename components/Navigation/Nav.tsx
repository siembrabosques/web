import React from 'react';
import type {Navigation} from '../../data/navigation'

type Props = {
	navigation: Navigation
}
const Nav = (props: Props) => {
	return <nav><h2>Navigation:</h2>
		<ul>
			{
				props.navigation.items.map(item => {
					return (
						<li key={item.id}>
							{item.label}
							{
								item.childItems ? (
									<ul>
										{
											item.childItems.nodes.map(child => <li key={child.id}>
												<a href={child.path}>                                                {
													child.label
												}
												</a></li>)
										}
									</ul>
								) : null
							}

						</li>
					)
				})
			}
		</ul>
	</nav>
}

export default Nav
