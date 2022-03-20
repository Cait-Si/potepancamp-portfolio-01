require 'rails_helper'

RSpec.describe "habits function", type: :request do
  let(:user_a) { FactoryBot.create(:user, name: 'test_a', email: 'test1@test.com') }
  let(:user_b) { FactoryBot.create(:user, name: 'test_b', email: 'test2@test.com') }
  let!(:habit_a) { FactoryBot.create(:habit, title: '習慣_1', detail: '内容_2', user: user_a) }
  let!(:habit_b) { FactoryBot.create(:habit, title: '習慣_2', detail: '内容_2', user: user_b) }
  let!(:habit_c) { FactoryBot.create(:habit, title: '習慣_3', detail: '内容_3', user: user_a) }

  before do
    post new_api_v1_user_session_path, params: { email: user_a.email, password: user_a.password }, as: :json
  end

  describe 'habits controller index function' do
    context 'case the login user is user_a' do
      before do
        auth_token = response.headers.slice('client', 'access-token', 'uid')
        get api_v1_habits_path, headers: auth_token
      end
      it 'user_a habit is showed in display' do
        json = JSON.parse(response.body)
        expect(response).to have_http_status 200
        expect(json['habits'].length).to eq 2
        expect(json['habits'][0]['id']).to eq habit_a.id
        expect(json['habits'][1]['id']).to eq habit_c.id
      end
      it 'user_b habit is not showed in display' do
        json = JSON.parse(response.body)
        expect(json['habits'].length).to eq 2
        expect(json['habits'][0]['id']).not_to eq habit_b.id
        expect(json['habits'][1]['id']).not_to eq habit_b.id
      end
    end
  end

  describe 'habit controller create function' do
    context 'case the login user is user_a' do
      it 'new habit create case success' do
        auth_token = response.headers.slice('client', 'access-token', 'uid')
        post api_v1_habits_path, params: {email: user_a.email, title: 'new_title_test', detail: 'new_detail_test'}, headers: auth_token
        json = JSON.parse(response.body)
        expect(response).to have_http_status 201
        expect(json['habit']['title']).to eq 'new_title_test'
        expect(json['habit']['detail']).to eq 'new_detail_test'
      end
      it 'new habit create case error' do
        auth_token = response.headers.slice('client', 'access-token', 'uid')
        post api_v1_habits_path, params: {email: user_a.email, title: '', detail: ''}, headers: auth_token
        json = JSON.parse(response.body)
        expect(response).to have_http_status 500
      end
    end
  end

  describe 'habit controller show function' do
    context 'case the login user is user_a' do
      before do
        auth_token = response.headers.slice('client', 'access-token', 'uid')
        get api_v1_habit_path(habit_a.id), headers: auth_token
      end
      it 'habit_a is showed in display' do
        json = JSON.parse(response.body)
        expect(response).to have_http_status 200
        expect(json['habit']['title']).to eq habit_a.title
        expect(json['habit']['detail']).to eq habit_a.detail
      end
    end
  end

  describe 'habit controller update function' do
    context 'case the login user is user_a' do
      it 'habit_c edit is success' do
        auth_token = response.headers.slice('client', 'access-token', 'uid')
        patch api_v1_habit_path(habit_c.id), params: {title: 'edit_title', detail: 'edit_detail', count: 1 }, headers: auth_token
        json = JSON.parse(response.body)
        expect(response).to have_http_status 201
        expect(json['habit']['title']).to eq 'edit_title'
        expect(json['habit']['detail']).to eq 'edit_detail'
        expect(json['habit']['count']).to eq 1
      end
      it 'habit_c edit is error' do
        auth_token = response.headers.slice('client', 'access-token', 'uid')
        patch api_v1_habit_path(habit_c.id), params: {title: '', detail: '', count: 1 }, headers: auth_token
        json = JSON.parse(response.body)
        expect(response).to have_http_status 500
      end
    end
  end

  describe 'habit controller destroy function' do
    context 'case the login user is user_a' do
      it 'habit_a destory is success' do
        auth_token = response.headers.slice('client', 'access-token', 'uid')
        delete api_v1_habit_path(habit_a.id), headers: auth_token
        json = JSON.parse(response.body)
        expect(response).to have_http_status 200
        expect(json['habit']['active']).to eq false
      end
    end
  end
end
