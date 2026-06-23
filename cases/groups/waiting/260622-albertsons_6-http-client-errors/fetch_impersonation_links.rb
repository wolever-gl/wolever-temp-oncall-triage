audience_ids = [12270, 3391, 9323]
domain = ENV.fetch("AUTH0_CALLBACK_DOMAIN")

helper = Object.new.extend(ImpersonationHelper)

Audience.where(id: audience_ids).includes(:team, :dataset_group).find_each do |audience|
  admin = helper.find_admin_user_for_team(audience.team)
  puts({
    audience_id: audience.id,
    audience_name: audience.name,
    team_id: audience.team_id,
    team_name: audience.team.name,
    dataset_group_id: audience.dataset_group_id,
    dataset_group_name: audience.dataset_group&.name,
    impersonate_user_id: admin&.id,
    impersonate_user_email: admin&.email,
    impersonation_url: helper.build_audience_url_with_impersonation(audience, domain: domain),
  }.to_json)
end
