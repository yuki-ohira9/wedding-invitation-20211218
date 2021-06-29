<?php

namespace App\Admin\Controllers;

use App\Models\Invitation;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;
use App\Models\User;
use Illuminate\Support\Carbon;

class InvitationsController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Invitation';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new User());

        // $grid->invitation()->id('id');
        $grid->column('name', '名前');
        $grid->invitation()->is_attend('出席')->using([
            0 => '欠席',
            1 => '出席',
        ], '未回答');
        
        $grid->invitation()->has_allergy('アレルギー')->using([
            0 => 'なし',
            1 => 'あり',
        ], '未回答');
        $grid->invitation()->tel('電話番号')->default('未回答');
        $grid->invitation()->created_at('回答日時')->display(function ($createdAt) {
            $dt = new Carbon($createdAt, 'UTC');
            return $createdAt ? $dt->setTimezone('Asia/Tokyo')->format('Y-m-d H:i:s') : '未回答';
        })->default('未回答');
        $grid->invitation()->updated_at('更新日時')->display(function ($updatedAt) {
            $dt = new Carbon($updatedAt, 'UTC');
            return $updatedAt ? $dt->setTimezone('Asia/Tokyo')->format('Y-m-d H:i:s') : '未回答';
        });

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Invitation::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('user_id', __('User id'));
        $show->field('is_attend', __('出席'));
        $show->field('desired', __('式を開催する上で配慮してほしいこと'));
        $show->field('has_allergy', __('アレルギー'));
        $show->field('allergy_detail', __('アレルギー内容'));
        $show->field('message', __('メッセージ'));
        $show->field('address', __('住所'));
        $show->field('tel', __('電話番号'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Invitation());

        $form->text('user.name', __('名前'))->disable();
        $form->switch('is_attend', __('出席'));
        $form->text('desired', __('式を開催する上で配慮してほしいこと'));
        $form->switch('has_allergy', __('アレルギー'));
        $form->text('allergy_detail', __('アレルギー内容'));
        $form->textarea('message', __('メッセージ'));
        $form->text('address', __('住所'));
        $form->text('tel', __('電話番号'));

        return $form;
    }
}
